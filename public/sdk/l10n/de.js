/*!
 * Ivideon Standalone Web SDK v.2.1.1
 * Copyright (C) 2010-2025 MOBILE VIDEO SOLUTIONS INC.
 *
 * You may not copy, modify, rent, sell, distribute or transfer any part of the Software
 * to anyone without the prior written consent of MOBILE VIDEO SOLUTIONS INC
 * and you agree to prevent unauthorized copying of the Software.
 * You may not reverse engineer, decompile, disassemble or make any attempt
 * to discover the source code of the Software.
 * If you do not agree, please stop using the Software.
 */
!function(e) {
    "use strict";
    e && e.addMessages("ivnm/web-app-core/language/language-provider/l10n/index", {
        "filesize.bytes": "Bytes",
        "filesize.kilobytes": "KB",
        "filesize.megabytes": "MB",
        "filesize.gigabytes": "GB",
        "filesize.terabytes": "TB",
        "filesize.unknown": "unbekannt"
    }, "de")
}(window._ivideon && window._ivideon.lang),
    function(e) {
        "use strict";
        e && e.addMessages("ivnm/web-app-shared-l10n/l10n/buttons", {
            "buttons.reset-filters.text": "Filter l\xf6schen",
            "buttons.search.text": "Finden",
            "buttons.help.text": "Hilfe",
            "buttons.hint.text": "Hilfe",
            "buttons.export.text": "Exportieren",
            "buttons.to-settings.text": "Einstellungen aufrufen",
            "buttons.play-video.text": "Aufzeichnung ansehen",
            "buttons.to-player.text": "Im Player \xf6ffnen",
            "buttons.camera-settings.text": "Kameraeinstellungen",
            "buttons.open-player.text": "Den Player \xf6ffnen",
            "buttons.promo-activate-service.text": "Gratis testen",
            "buttons.refresh-page": "Seite aktualisieren",
            "buttons.confirm": "Best\xe4tigen",
            "buttons.expand": "Erweitern",
            "buttons.collapse": "Zusammenklappen",
            "buttons.expand-all": "Alle maximieren",
            "buttons.collapse-all": "Alle minimieren"
        }, "de")
    }(window._ivideon && window._ivideon.lang),
    function(e) {
        "use strict";
        e && e.addMessages("ivnm/web-app-shared-l10n/l10n/dialogs", {
            "dlg.message.title": "Nachricht",
            "dlg.message.button.close": "Schlie\xdfen",
            "dlg.error.title": "Fehler",
            "dlg.info.title": "Info",
            "dlg.confirm.title": "Best\xe4tigung",
            "dlg.confirm.button.yes": "Ja",
            "dlg.confirm.button.no": "Nein",
            "dlg.prompt.title": "Eingabe",
            "dlg.prompt.button.yes": "OK",
            "dlg.prompt.button.no": "Abbrechen"
        }, "de")
    }(window._ivideon && window._ivideon.lang),
    function(e) {
        "use strict";
        e && e.addMessages("ivnm/web-app-shared-l10n/l10n/wizards", {
            "buttons.retry.text": "Erneut versuchen",
            "buttons.done.text": "Fertig",
            "buttons.next.text": "Weiter",
            "buttons.back.text": "Zur\xfcck",
            "buttons.close.text": "Schlie\xdfen",
            "buttons.cancel.text": "Abbrechen",
            "buttons.rename.text": "Umbenennen",
            "buttons.remove.text": "L\xf6schen",
            "buttons.add.text": "Hinzuf\xfcgen",
            "buttons.add_more.text": "Mehr hinzuf\xfcgen",
            "buttons.connect.text": "Verbinden",
            "buttons.link.text": "Verbinden",
            "buttons.yes.text": "OK",
            "buttons.configure.text": "Konfigurieren",
            "buttons.submit.text": "Senden",
            "buttons.save.text": "Speichern",
            "buttons.refresh.text": "Aktualisieren",
            "buttons.apply.text": "Anwenden",
            "buttons.reset.text": "Zur\xfccksetzen",
            "buttons.download.text": "Download",
            "buttons.edit.text": "\xc4ndern",
            "progress.title": "Bitte warten",
            "error.title": "Es ist ein Fehler aufgetreten",
            "error.description.with_retry": "Versuchen Sie es bitte noch einmal. Sollte der Fehler erneut auftreten, kontaktieren Sie bitte unseren technischen Kundendienst unter {:support_email_link}.",
            "error.description.without_retry": "Bitte kontaktieren Sie unseren technischen Kundendienst via {:support_email_link}.",
            "error.message.with_retry": "Es ist ein Fehler aufgetreten. Versuchen Sie es bitte noch einmal. Sollte der Fehler erneut auftreten, kontaktieren Sie bitte unseren technischen Kundendienst unter {:support_email_link}.",
            "info.contact_service_provider.title": "Kontaktieren Sie Ihren Serviceanbieter, um diesen Service zu verbinden",
            "info.empty-data-message.tittle": "Keine Daten",
            "error.message.short": "Es ist ein Fehler aufgetreten. Versuchen Sie es erneut oder kontaktieren Sie unseren technischen Kundendienst.",
            "error.message.data-load": "Beim Laden der Daten ist ein Fehler aufgetreten",
            "error.message.email-list.invalid-list": "Illegale Liste an E-Mail-Adressen. \xdcberpr\xfcfen Sie die Genauigkeit der Rechtschreibung: {emailList}",
            "error.message.email-list.max-count-exceeded": "Sie k\xf6nnen nicht mehr als {maxCount} {maxCount:plural(Empf\xe4nger,Empf\xe4nger)} angeben.",
            "info.contact-support-for-help": "Sollten Sie Hilfe ben\xf6tigen, kontaktieren Sie unseren technischen Kundendienst unter {:support_email_link}."
        }, "de")
    }(window._ivideon && window._ivideon.lang),
    function(e) {
        "use strict";
        e && e.addMessages("ivnm/web-app-shared/api/json-api/l10n/index", {
            "error.network": "Beim Senden der Anfrage ist ein Fehler aufgetreten. Pr\xfcfen Sie Ihre Internetverbindung.",
            "error.network.with-retry": "Beim Senden der Anfrage ist ein Fehler aufgetreten. Pr\xfcfen Sie Ihre Internetverbindung.<br/>Erneut {try_again_link_}versuchen{_try_again_link}.",
            "error.timeout": "Zeit\xfcberschreitung der Anfrage. Pr\xfcfen Sie Ihre Internetverbindung.",
            "error.abort": "Die Anfrage wurde angebrochen",
            "error.http": "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut. Wenn der Fehler weiterhin auftritt, kontaktieren Sie unseren Kundendienst mit einer ausf\xfchrlichen Beschreibung.",
            "error.parse": "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut. Wenn der Fehler weiterhin auftritt, kontaktieren Sie unseren Kundendienst mit einer ausf\xfchrlichen Beschreibung."
        }, "de")
    }(window._ivideon && window._ivideon.lang),
    function(e) {
        "use strict";
        e && e.addMessages("ivnm/web-app-shared/timeline/timeline-calendar/l10n/index", {
            "dialog.title": "Ein Datum ausw\xe4hlen"
        }, "de")
    }(window._ivideon && window._ivideon.lang),
    function(e) {
        "use strict";
        e && e.addMessages("ivnm/web-app-ui-components/forms/datepicker/l10n/index", {
            "buttons.today.text": "heute {date}",
            "date_select.input.date_empty": "Datum ausw\xe4hlen",
            "range_select.input.date_empty": "W\xe4hlen Sie einen Datumsbereich",
            "range_select.dialog.title": "W\xe4hlen Sie einen Datumsbereich",
            "range_select.dialog.title.date": "Ein Datum ausw\xe4hlen",
            "range_select.dialog.time.label": "ZEIT",
            "range_select.dialog.time.start.label": "von",
            "range_select.dialog.time.end.label": "durch"
        }, "de")
    }(window._ivideon && window._ivideon.lang),
    function(e) {
        "use strict";
        e && e.addMessages("ivnm/web-app-ui-components/notify/l10n/UiNotifyCounter", {
            "notify.counter": "{current} von {total}"
        }, "de")
    }(window._ivideon && window._ivideon.lang),
    function(e) {
        "use strict";
        e && e.addMessages("ivnm/web-app-video-player/src/l10n/index", {
            "archive-motion-search.title": "Archiv durchsuchen",
            "playback-controls.speed.tooltip": "Archiv-Wiedergabegeschwindigkeit",
            "playback-controls.speed.menu.title": "Geschwindigkeit",
            "playback-controls.play.tooltip": "Wiedergabe",
            "playback-controls.stop.tooltip": "Stopp",
            "playback-controls.pause.tooltip": "Pause",
            "playback-controls.status.live.text": "Live",
            "playback-controls.status.live.tooltip": "Live-Feed",
            "playback-controls.to-live.text": "Live",
            "playback-controls.to-live.tooltip": "Zum Live-Feed wechseln",
            "playback-controls.fullscreen.tooltip.enter": "Vollbild",
            "playback-controls.fullscreen.tooltip.exit": "Vollbild verlassen",
            "playback-controls.rewind.backward.tooltip": "{amount} Sek. zur\xfcck springen",
            "playback-controls.rewind.forward.tooltip": "{amount} Sek. vorw\xe4rts springen",
            "playback-controls.pin-button.tooltip.pin": "Interface pinnen",
            "playback-controls.pin-button.tooltip.unpin": "Interface unpinnen",
            "playback-controls.volume.tooltip": "Lautst\xe4rke",
            "playback-controls.volume.tooltip.disabled": "Stummschaltung ein",
            "playback-controls.volume.mute.tooltip.mute": "Stummschalten",
            "playback-controls.volume.mute.tooltip.unmute": "Stummschaltung aufheben",
            "playback-controls.ptz.text": "PTZ",
            "playback-controls.ptz.tooltip.enable": "PTZ anzeigen",
            "playback-controls.ptz.tooltip.disable": "PTZ ausblenden",
            "playback-controls.settings.video-quality.title": "Wiedergabequalit\xe4t",
            "playback-controls.settings.highlight-archive-records.title": "Archiv-Markierung",
            "playback-controls.settings.highlight-archive-records.values.off.short": "Aus",
            "playback-controls.settings.highlight-archive-records.values.off": "Ausgeschaltet",
            "playback-controls.settings.highlight-archive-records.values.on.short": "Ein",
            "playback-controls.settings.highlight-archive-records.values.on": "Lokal/Cloud",
            "playback-controls.settings.pin-panels.title": "Interface pinnen",
            "playback-controls.settings.sound.on.title": "Stummschaltung aufheben",
            "playback-controls.settings.sound.off.title": "Stummschalten",
            "playback-controls.settings.pin-panels.value.off": "Nein",
            "playback-controls.settings.pin-panels.value.on": "Ja",
            "playback-controls.settings.camera-settings.title": "Kameramen\xfc",
            "playback-controls.settings.camera-settings-access.title": "Kamerazugriff",
            "playback-controls.download": "Clip herunterladen",
            "playback-controls.settings.share.title": "Teilen",
            "playback-controls.settings.abuse.title": "Melden",
            "playback-controls.settings.statistics.title": "Technische Information",
            "playback-controls.settings.low-latency-mode.title": "Low latency",
            "playback-controls.settings.archive-export.title": "Archivexport",
            "hotkeys.space": "Leertaste",
            "help-modal.sections.timeline.title": "Zeitachse",
            "help-modal.sections.timeline.zoom": "Verwenden Sie das Mausrad oder das Touchpad, um die <b>Zeitachse zu vergr\xf6\xdfern/verkleinern</b>.",
            "help-modal.sections.timeline.scroll": "Halten Sie die linke Maustaste gedr\xfcckt und ziehen Sie die Zeitachse, um zu <b>scrollen</b>.",
            "help-modal.sections.hotkeys.title": "Hotkeys",
            "help-modal.sections.hotkeys.playback": "Pause/Wiedergabe/Stopp",
            "help-modal.sections.hotkeys.rewind": "{amount} Sekunden zur\xfcck/vorw\xe4rts springen (gedr\xfcckt halten, um weiter zu springen)",
            "help-modal.sections.hotkeys.volume": "Lautst\xe4rkeregelung (gedr\xfcckt halten, um die Lautst\xe4rke kontinuierlich zu erh\xf6hen/zu reduzieren)",
            "help-modal.sections.hotkeys.mute": "Stummschalten/Stummschaltung aufheben",
            "help-modal.sections.hotkeys.live": "Zum Live-Feed wechseln",
            "help-modal.sections.hotkeys.pin-panels": "Interface pinnen / unpinnen (um die Player-Interface auszublenden, unpinne sie und bewege den Cursor weg)",
            "help-modal.sections.hotkeys.fullscreen": "Vollbild aufrufen/verlassen",
            "help-modal.sections.hotkeys.events": "Ereignisse anzeigen/ausblenden",
            "help-modal.sections.hotkeys.archive-bookmarks-toggle": "Lesezeichen anzeigen/ausblenden",
            "help-modal.sections.hotkeys.archive-bookmarks-add": "Lesezeichen hinzuf\xfcgen",
            "help-modal.sections.low-latency-mode.title": "Low latency",
            "help-modal.sections.low-latency-mode.text": "Um die Verz\xf6gerung des Live-Streams im Vergleich zur Echtzeit zu verringern, aktivieren Sie den {low_latency_mode_name}-Modus. Bitte beachten Sie, dass das kleinste Probleme bei der Wiedergabe zur Folge haben kann.",
            "status-indicator.rewind.text": "{amount} Sek.",
            "timeline.controls.prev-day.tooltip": "Voriger Tag",
            "timeline.controls.next-day.tooltip": "N\xe4chster Tag",
            "timeline.plugins.archive-motion-search.button": "Archiv durchsuchen",
            "timeline.plugins.archive-motion-search.small-screen-size-popup.title": "Nachricht",
            "timeline.plugins.archive-motion-search.small-screen-size-popup.message": "Ihr Bildschirm ist zu klein f\xfcr die Anzeige des Feldes Archivsuche. <br/><br/> \xd6ffnen Sie diese Seite auf einem anderen Ger\xe4t oder vergr\xf6\xdfern Sie das Browserfenster.",
            "timeline.plugins.archive-export.button": "Exportieren",
            "timeline.plugins.archive-export.notifications.selection": "Fragment f\xfcr den Export: {startTime} — {endTime}",
            "timeline.plugins.archive-export.notifications.progress": "Wird vorbereitet…",
            "timeline.plugins.archive-export.notifications.done": "Sie k\xf6nnen das Fragment auf der Seite {link_}Archivexport{_link} herunterladen",
            "timeline.plugins.archive-export.notifications.error": "Fehler beim Exportieren der Aufzeichnung. {link_}Bitte versuchen Sie es erneut{_link}",
            "timeline.plugins.archive-export.buttons.export": "Exportieren",
            "timeline.plugins.archive-export.buttons.cancel": "Abbrechen",
            "timeline.plugins.archive-export.errors.no-visible-records": "Keine Aufzeichnungen im sichtbaren Zeitachsenfragment",
            "timeline.plugins.archive-export.errors.no_records_in_range": "Das ausgew\xe4hlte Fragment enth\xe4lt keine Aufzeichnungen, die exportiert werden k\xf6nnen.",
            "timeline.plugins.archive-datepicker.popup.title": "Ein Datum ausw\xe4hlen",
            "timeline.plugins.zoom.tooltip": "Die Zeitachse mit dem Mausrad vergr\xf6\xdfern und verkleinern",
            "timeline.plugins.legend.title": "Markierungen f\xfcr die Zeitachse",
            "timeline.plugins.legend.description.highlight-archive-records": "Aufzeichnungen markiert nach Archivtyp.",
            "timeline.plugins.legend.types.local.description": "Lokale Aufzeichnungen",
            "timeline.plugins.legend.types.cloud.description": "Cloud-Aufzeichnungen",
            "timeline.plugins.legend.types.motion.description": "Bewegung",
            "timeline.plugins.save-frame.title": "Frame speichern",
            "site-security.connect.title": "Sicherheit am Standort einrichten",
            "site-security.send-alert.title": "Sicherheit rufen",
            "error.camera-offline.message": "Bitte versuchen Sie es in einigen Minuten erneut.<br>Pr\xfcfen Sie Ihre Internetverbindung und Ihre Kameraeinstellungen.",
            "error.video-ended.live.title": "Live-Feed ist beendet",
            "error.video-stalled.title": "Video kann nicht geladen werden",
            "error.not-found.title": "Video nicht gefunden",
            "error.access-denied.message": "Zugriff verweigert",
            "error.subject-right-missing.message": "Diese Kamera ist nicht verf\xfcgbar. Ihr Besitzer hat vielleicht den Zugriff deaktiviert.",
            "error.archive-not-available.title": "Archiv kann nicht angezeigt werden",
            "error.generic.title": "Video nicht verf\xfcgbar",
            "error.buttons.retry": "Video neu laden",
            "error.codec-not-supported.h265.main": "Ihr Browser unterst\xfctzt den Videocodec H.265 nicht. Um die Videos dieser Kamera ansehen zu k\xf6nnen, verwenden Sie die neuesten Browserversionen von: Google Chrome (Windows, macOS), Safari (macOS).",
            "error.codec-not-supported.h265.secondary": " Sie k\xf6nnen diese Kamera auch in unserer Mobilapp f\xfcr {ios_link_}iOS{_ios_link} oder {android_link_}Android{_android_link} \xf6ffnen.",
            "error.switch-to-no-sound": "Videoformatfehler. Versuchen Sie, das Video ohne Ton abzuspielen",
            "error.fullscreen.not-available": "Vollbildmodus konnte nicht aktiviert werden",
            "menu.close": "Men\xfc schlie\xdfen",
            "time-selector.title": "Zeitraum ausw\xe4hlen",
            "time-selector.from": "Von",
            "time-selector.to": "Bis",
            "time-selector.confirm": "Best\xe4tigen",
            "time-selector.close": "Schlie\xdfen",
            "sidebar.collapse": "Zusammenklappen",
            "sidebar.expand": "Erweitern",
            "timeline_status.loading": "Archiv wird geladen …",
            "timeline_status.empty": "Keine Aufzeichnungen",
            "quality.0": "Niedrige Qualit\xe4t",
            "quality.0.short": "Gering",
            "quality.1": "Mittlere Qualit\xe4t",
            "quality.1.short": "Mittel",
            "quality.2": "Hohe Qualit\xe4t",
            "quality.2.short": "Hoch",
            "dialog.idle_offline.title": "Live-Video ist nicht verf\xfcgbar",
            "dialog.idle_offline.text": "Bitte versuchen Sie es in einigen Minuten erneut.<br/>Pr\xfcfen Sie au\xdferdem Ihre Internetverbindung und Ihre Kameraeinstellungen.",
            "dialog.live_video_loading_error.title": "Live-Video ist nicht verf\xfcgbar",
            "dialog.live_video_loading_error.text": "Bitte versuchen Sie es in einigen Minuten erneut.<br/>Pr\xfcfen Sie au\xdferdem Ihre Internetverbindung und Ihre Kameraeinstellungen.",
            "dialog.live_video_loading_error.button.retry": "Erneut versuchen",
            "dialog.live_streaming_limited.title": "Zeit des durchgehenden Live-Streamings ist beschr\xe4nkt",
            "dialog.live_streaming_limited.text": "Angesehen seit {playbackStartTime}. Das Limit ist {playbackLimit}. <br/><br/>Klicken Sie auf <strong>Live fortsetzen</strong>, um weiterzuschauen.",
            "dialog.live_streaming_limited.button.continue_live": "Live fortsetzen",
            "dialog.archive_streaming_limited.title": "Zeit des durchgehenden Archiv-Streamings ist beschr\xe4nkt",
            "dialog.archive_streaming_limited.text": "Angesehen seit {playbackStartTime}. Das Limit ist {playbackLimit}. <br/><br/>Klicken Sie auf <strong>Archiv fortsetzen</strong>, um weiterzuschauen.",
            "dialog.archive_streaming_limited.button.continue_archive": "Archiv fortsetzen",
            "dialog.archive_video_loading_error.title": "Archivierte Aufzeichnungen sind nicht verf\xfcgbar",
            "dialog.archive_video_loading_error.text": "Bitte versuchen Sie es in einigen Minuten erneut.<br/>Pr\xfcfen Sie au\xdferdem Ihre Internetverbindung und Ihre Kameraeinstellungen.",
            "dialog.archive_video_loading_error.button.retry": "Erneut versuchen",
            "dialog.archive_video_ended.title": "Das archivierte Video hat geendet",
            "dialog.archive_video_ended.text": "Nutzen Sie die Zeitachse, um eine archivierte Aufzeichnung oder Live-Video auszuw\xe4hlen",
            "dialog.player_engine_error.title": "Videoplayer konnte nicht gestartet werden",
            "dialog.player_engine_error.text": "Bitte laden Sie die Webseite neu.",
            "dialog.player_engine_error.select_engine.short.text": "Wenn der Fehler erneut auftritt, verwenden Sie {link_account_settings_}einen anderen Videoplayer{_link_account_settings}.",
            "dialog.player_engine_error.select_engine.full.text": "Wenn der Fehler erneut auftritt, verwenden Sie einen anderen Videoplayer. Sie k\xf6nnen den Videoplayer {link_camera_settings_}nur f\xfcr diese Kamera{_link_camera_settings} oder {link_account_settings_}f\xfcr alle Kameras im Konto{_link_account_settings} \xe4ndern.",
            "dialog.player_engine_error.button.retry": "Wiederholen",
            "dialog.progress_error.closest_record_not_found.text": "Archiv f\xfcr {datetime} nicht gefunden",
            "dialog.progress_error.closest_record_network_error.text": "Bei der Suche nach der Archivaufzeichnung ist ein Fehler aufgetreten",
            "dialog.progress_error.closest_record_network_error.button.retry": "Erneut versuchen",
            "archive-record-unavailable-message.title": "Das Archiv f\xfcr  {datetime} ist nicht verf\xfcgbar",
            "archive-record-unavailable-message.description.change-plan": "\xc4ndern Sie Ihren Tarif, um das ausgew\xe4hlte Segment aus dem lokalen Archiv anzusehen.",
            "archive-record-unavailable-message.description.contact-service-provider": "Kontaktieren Sie Ihren Serviceanbieter.",
            "archive-record-unavailable-message.description.contact-owner": "Kontaktieren Sie den Besitzer der Kamera.",
            "archive-record-unavailable-message.button.change-plan": "Tarif \xe4ndern",
            "archive-record-unavailable-message.description.configure-camera-subscriptions": "Um das lokale Archivsegment anzuzeigen, das Sie auf dieser Kamera ausgew\xe4hlt haben, m\xfcssen Sie das Abonnement konfigurieren.",
            "archive-record-unavailable-message.button.configure-camera-subscriptions": "Abonnements konfigurieren",
            "embed-sharing.title": "Teilen",
            "embed-sharing.description": "Video in einer Website einbetten?"
        }, "de")
    }(window._ivideon && window._ivideon.lang),
    function(e) {
        "use strict";
        e && e.addMessages("ivnm/web-app-video-player/src/ui/components/streaming-connection-quality/l10n/connection-quality", {
            title: "Verbindungsstatus ({camera})",
            "connection.preface": "Eine schlechte Verbindung kann die Qualit\xe4t des Videos und der Ger\xe4usche der Kamera beeinflussen. Sie kann auch zu Verz\xf6gerungen oder einer instabilen Archivaufzeichnung f\xfchren.",
            "connection.notification": "Verbindungsprobleme",
            "fields.speed": "Geschwindigkeit: <b>{value}</b>",
            "fields.speed.required": "Erforderliche Geschwindigkeit: <b>{value}</b>",
            "fields.wifi": "WLAN-Signal: <b>{value}</b>",
            "fields.rtt": "Ping: <b>{value}</b>",
            "wifi-signal.high": "Hoch",
            "wifi-signal.medium": "Mittel",
            "wifi-signal.low": "Gering",
            "units.ms": "ms",
            "units.kbits": "kb/s",
            camera: "Kamera",
            cloud: "Cloud",
            player: "Player",
            "hint.to-player.rtt": "Ping ist die Zeit, die es dauert, bis eine Anfrage den Empf\xe4nger erreicht und zur\xfcckkehrt. Je niedriger der Ping ist, desto besser ist die Verbindung.",
            "playback-controls.settings.quality-monitor.title": "Verbindungsstatus"
        }, "de")
    }(window._ivideon && window._ivideon.lang);
