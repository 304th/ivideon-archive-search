// @ts-nocheck
"use client";

// Ivideon Web SDK в Next.js: два плеера (клиент + склад) + панель управления
// (скорость 1x/2x/4x/8x и перемотка ±5/±10 сек) — действует на ОБА плеера.
// SDK: public/sdk/iv-standalone-web-sdk.js, .css, public/sdk/l10n/...
//
// URL: ?clientCamera=..&storeCamera=..&ts=<unix|мс|ISO>&token=..&apiHost=..&hmac=..&preroll=..&iw=..&ih=..

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const DEFAULTS = {
  cameraId: "100-fuiHwwSdQTsCAegHRau5DR:0",
  token: "xtok-100K37-1607685e9bd94855b763efa32412ed3c-LdBIwthYochyufiY",
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
  const ts = parseTsToUnixSeconds(p.get("ts"));
  return {
    shared,
    players: [
      { cameraId: clientCamera, ts, sound: true,  muted: true,  label: "Клиентская зона (звук — по кнопке)" },
      { cameraId: storeCamera,  ts, sound: false, muted: false, label: "Склад (без звука)" },
    ],
  };
}

export default function Page() {
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [status, setStatus] = useState("Загрузка SDK…");
  const [labels, setLabels] = useState(["Клиентская зона", "Склад"]);
  const [controls, setControls] = useState(false); // показывать панель (режим архива)
  const [speed, setSpeed] = useState(1);

  const refs = [useRef(null), useRef(null)];
  const startedRef = useRef(false);
  const playersRef = useRef([]);
  const speedRef = useRef(1);

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
        id: pl.cameraId, cameraName: pl.label,
        imageWidth: cfg.shared.imageWidth, imageHeight: cfg.shared.imageHeight,
        soundEnabled: pl.sound,
      });
      const opts = { container, camera, defaultControls: true, layout: "auto" };
      if (sdk.playerSize && sdk.playerSize.FILL_BY_WIDTH != null) opts.sizeCalculationMethod = sdk.playerSize.FILL_BY_WIDTH;
      const player = sdk.createPlayer(opts);
      if (pl.muted && typeof player.setMuted === "function") player.setMuted(true);
      if (pl.ts != null) player.playArchive({ startTime: (pl.ts - cfg.shared.preroll) * 1000 });
      else player.playLive();
      return player;
    }

    function start(iv) {
      setStatus("Инициализация SDK…");
      iv.sdk
          .init({ rootUrl: window.location.origin + "/sdk/", i18nOptions: { availableLanguages: ["en", "ru"], language: "ru" } })
          .then((sdk) => {
            if (cancelled) return;
            const auth = { api_host: cfg.shared.apiHost, access_token: cfg.shared.token };
            if (cfg.shared.hmac) auth.hmac_secret = cfg.shared.hmac;
            sdk.configureWithCloudApiAuthResponse(auth);

            playersRef.current = cfg.players.map((pl, i) => makePlayer(sdk, refs[i].current, pl));

            const isArchive = cfg.players.some((pl) => pl.ts != null);
            setControls(isArchive);
            setStatus(cfg.players.map((pl, i) =>
                "П" + (i + 1) + ": " + pl.cameraId + " " + (pl.ts != null ? new Date(pl.ts * 1000).toLocaleString() : "live")
            ).join("  |  "));
          })
          .catch((err) => { setStatus("Ошибка init: " + (err && err.message ? err.message : String(err))); console.error(err); });
    }

    return () => { cancelled = true; };
  }, [sdkLoaded]);

  // --- управление обоими плеерами ---
  function applySpeed(mult) {
    speedRef.current = mult;
    setSpeed(mult);
    playersRef.current.forEach((p) => {
      const t = typeof p.getPlayheadTime === "function" ? p.getPlayheadTime() : 0;
      if (t) p.playArchive({ startTime: t, speed: mult });
    });
  }
  function applySkip(deltaSec) {
    playersRef.current.forEach((p) => {
      const t = typeof p.getPlayheadTime === "function" ? p.getPlayheadTime() : 0;
      if (t) p.playArchive({ startTime: t + deltaSec * 1000, speed: speedRef.current });
    });
  }

  const box = { width: "100%", background: "#000", borderRadius: 10, overflow: "hidden" };

  const btn = {
    padding: "8px 10px", border: "1px solid #d98a24", borderRadius: 8, cursor: "pointer",
    background: "#f2a33c", color: "#1a1205", font: "600 13px/1 -apple-system, sans-serif",
  };
  const btnGhost = { ...btn, background: "#1d232c", color: "#dfe4ea", borderColor: "#3a4453" };
  const speedBtn = (x) => (x === speed ? btn : btnGhost);

  return (
      <main style={{ fontFamily: "sans-serif", padding: 16, maxWidth: 1600 }}>
        <link rel="stylesheet" href="/sdk/iv-standalone-web-sdk.css" />
        <style>{`
        .iv-player-box .iv-standalone-web-sdk-container, .iv-player-box > * { width: 100% !important; }
        .iv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; align-items: start; }
        @media (max-width: 720px) { .iv-grid { grid-template-columns: 1fr; } }
      `}</style>
        <Script src="/sdk/iv-standalone-web-sdk.js" strategy="afterInteractive"
                onLoad={() => setSdkLoaded(true)}
                onError={() => setStatus("Не удалось загрузить /sdk/iv-standalone-web-sdk.js")} />

        <h1 style={{ fontSize: 16 }}>Ivideon Web SDK — два плеера</h1>
        <div style={{ fontFamily: "monospace", color: "#666", marginBottom: 12 }}>{status}</div>

        <div className="iv-grid">
          {labels.map((lb, i) => (
              <div key={i} style={{ minWidth: 0 }}>
                <div style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>{lb}</div>
                <div className="iv-player-box" ref={refs[i]} style={box} />
              </div>
          ))}
        </div>

        {/* Плавающая панель управления — правый нижний угол, поверх контента */}
        {controls && (
            <div style={{
              position: "fixed", bottom: 16, width: '100%', zIndex: 2147483647, display: "flex", justifyContent: "center"
            }}>
              <div
               style={{
                 display: "flex", alignItems: "center", gap: 8, padding: 10,
                 background: "rgba(15,18,22,0.92)", border: "1px solid #262d38", borderRadius: 12,
                 boxShadow: "0 8px 24px rgba(0,0,0,0.4)", backdropFilter: "blur(4px)",
               }}
              >
                <button style={speedBtn(1)} onClick={() => applySpeed(1)}>1x</button>
                <button style={speedBtn(2)} onClick={() => applySpeed(2)}>2x</button>
                <button style={speedBtn(4)} onClick={() => applySpeed(4)}>4x</button>
                <button style={speedBtn(8)} onClick={() => applySpeed(8)}>8x</button>

                <span style={{ width: 1, alignSelf: "stretch", background: "#262d38", margin: "0 2px" }} />

                <button style={btnGhost} onClick={() => applySkip(-10)} title="Назад 10с">⏪ 10с</button>
                <button style={btnGhost} onClick={() => applySkip(-5)} title="Назад 5с">⏪ 5с</button>
                <button style={btnGhost} onClick={() => applySkip(5)} title="Вперёд 5с">5с ⏩</button>
                <button style={btnGhost} onClick={() => applySkip(10)} title="Вперёд 10с">10с ⏩</button>
              </div>
            </div>
        )}
      </main>
  );
}
