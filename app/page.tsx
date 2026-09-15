// @ts-nocheck
"use client";

// Ivideon Web SDK в Next.js: два плеера (клиентская зона + склад), один ts.
// SDK: public/sdk/iv-standalone-web-sdk.js, .css, public/sdk/l10n/...
//
// URL-параметры:
//   clientCamera=100-...:0   камера клиентской зоны (со звуком)
//   storeCamera=100-...:0    камера склада (без звука)
//   ts=<unix-сек | unix-мс | ISO>   общий момент для обоих (нет -> live)
//   token, apiHost, hmac, preroll, iw, ih

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const DEFAULTS = {
  cameraId: "100-fuiHwwSdQTsCAegHRau5DR:0",
  token: "",
  apiHost: "openapi-alpha.ivideon.com",
  hmac: "",
  imageWidth: 1280,
  imageHeight: 720,
  preroll: 10,
};

function parseTsToUnixSeconds(raw) {
  if (raw == null) return null;
  const s = String(raw).trim();
  if (!s) return null;
  if (/^\d{10}$/.test(s)) return parseInt(s, 10);
  if (/^\d{13}$/.test(s)) return Math.floor(parseInt(s, 10) / 1000);
  const ms = Date.parse(s);
  return isNaN(ms) ? null : Math.floor(ms / 1000);
}

function readConfig() {
  const p = new URLSearchParams(window.location.search);
  const num = (v, d) => (v != null && v !== "" && !isNaN(+v) ? +v : d);

  const shared = {
    token: p.get("token") || DEFAULTS.token,
    apiHost: p.get("apiHost") || DEFAULTS.apiHost,
    hmac: p.get("hmac") || DEFAULTS.hmac,
    imageWidth: num(p.get("iw"), DEFAULTS.imageWidth),
    imageHeight: num(p.get("ih"), DEFAULTS.imageHeight),
    preroll: num(p.get("preroll"), DEFAULTS.preroll),
  };

  const clientCamera = p.get("clientCamera") || DEFAULTS.cameraId;
  const storeCamera = p.get("storeCamera") || DEFAULTS.cameraId;
  const ts = parseTsToUnixSeconds(p.get("ts")); // один момент на оба плеера

  return {
    shared,
    players: [
      { cameraId: clientCamera, ts: ts, sound: true,  muted: true,  label: "Клиентская зона (звук выкл. — включите кнопкой)" },
      { cameraId: storeCamera,  ts: ts, sound: false, muted: false, label: "Склад (без звука)" },
    ],
  };
}

export default function Page() {
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [status, setStatus] = useState("Загрузка SDK…");
  const refs = [useRef(null), useRef(null)];
  const [labels, setLabels] = useState(["Клиентская зона (звук выкл. — включите кнопкой)", "Склад (без звука)"]);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!sdkLoaded || startedRef.current) return;
    startedRef.current = true;
    let cancelled = false;

    const cfg = readConfig();
    setLabels(cfg.players.map((pl) => pl.label));

    const t0 = Date.now();
    (function waitForSdk() {
      const iv = typeof window !== "undefined" ? window._ivideon : null;
      if (iv && iv.sdk && typeof iv.sdk.init === "function") return start(iv);
      if (Date.now() - t0 > 10000) { setStatus("SDK не инициализировался (нет window._ivideon)"); return; }
      setTimeout(waitForSdk, 50);
    })();

    function makePlayer(sdk, container, pl) {
      const camera = sdk.createCamera({
        id: pl.cameraId,
        cameraName: pl.label,
        imageWidth: cfg.shared.imageWidth,
        imageHeight: cfg.shared.imageHeight,
        soundEnabled: pl.sound,
      });
      const opts = { container, camera, defaultControls: true, layout: "auto" };
      if (sdk.playerSize && sdk.playerSize.FILL_BY_WIDTH != null) {
        opts.sizeCalculationMethod = sdk.playerSize.FILL_BY_WIDTH;
      }
      const player = sdk.createPlayer(opts);
      // Стартуем в mute там, где включён звук: иначе браузер запретит автозапуск.
      if (pl.muted && typeof player.setMuted === "function") player.setMuted(true);
      if (pl.ts != null) player.playArchive({ startTime: (pl.ts - cfg.shared.preroll) * 1000 });
      else player.playLive();
      return player;
    }

    function start(iv) {
      setStatus("Инициализация SDK…");
      iv.sdk
          .init({
            rootUrl: window.location.origin + "/sdk/",
            i18nOptions: { availableLanguages: ["en", "ru"], language: "ru" },
          })
          .then((sdk) => {
            if (cancelled) return;
            const auth = { api_host: cfg.shared.apiHost, access_token: cfg.shared.token };
            if (cfg.shared.hmac) auth.hmac_secret = cfg.shared.hmac;
            sdk.configureWithCloudApiAuthResponse(auth);

            cfg.players.forEach((pl, i) => makePlayer(sdk, refs[i].current, pl));

            setStatus(cfg.players.map((pl, i) =>
                "П" + (i + 1) + ": " + pl.cameraId + " " +
                (pl.ts != null ? new Date(pl.ts * 1000).toLocaleString() : "live")
            ).join("  |  "));
          })
          .catch((err) => {
            setStatus("Ошибка init: " + (err && err.message ? err.message : String(err)));
            console.error(err);
          });
    }

    return () => { cancelled = true; };
  }, [sdkLoaded]);

  const box = { width: "100%", background: "#000", borderRadius: 10, overflow: "hidden" };

  return (
      <main style={{ fontFamily: "sans-serif", padding: 16, maxWidth: 1600 }}>
        <link rel="stylesheet" href="/sdk/iv-standalone-web-sdk.css" />
        <style>{`
        .iv-player-box .iv-standalone-web-sdk-container, .iv-player-box > * { width: 100% !important; }
        .iv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; align-items: start; }
        @media (max-width: 720px) { .iv-grid { grid-template-columns: 1fr; } }
      `}</style>
        <Script
            src="/sdk/iv-standalone-web-sdk.js"
            strategy="afterInteractive"
            onLoad={() => setSdkLoaded(true)}
            onError={() => setStatus("Не удалось загрузить /sdk/iv-standalone-web-sdk.js")}
        />

        <h1 style={{ fontSize: 16 }}>Поиск товара через архив</h1>
        <div style={{ fontFamily: "monospace", color: "#666", marginBottom: 12 }}>{status}</div>

        <div className="iv-grid">
          {labels.map((lb, i) => (
              <div key={i} style={{ minWidth: 0 }}>
                <div style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>{lb}</div>
                <div className="iv-player-box" ref={refs[i]} style={box} />
              </div>
          ))}
        </div>
      </main>
  );
}