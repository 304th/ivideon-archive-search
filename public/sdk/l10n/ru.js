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
        "filesize.bytes": "байт",
        "filesize.kilobytes": "КБ",
        "filesize.megabytes": "МБ",
        "filesize.gigabytes": "ГБ",
        "filesize.terabytes": "ТБ",
        "filesize.unknown": "неизвестен"
    }, "ru")
}(window._ivideon && window._ivideon.lang),
    function(e) {
        "use strict";
        e && e.addMessages("ivnm/web-app-shared-l10n/l10n/buttons", {
            "buttons.reset-filters.text": "Сбросить фильтры",
            "buttons.search.text": "Найти",
            "buttons.help.text": "Помощь",
            "buttons.hint.text": "Справка",
            "buttons.export.text": "Экспорт",
            "buttons.to-settings.text": "Перейти к настройкам",
            "buttons.play-video.text": "Смотреть запись",
            "buttons.to-player.text": "Открыть в плеере",
            "buttons.camera-settings.text": "Настройки камеры",
            "buttons.open-player.text": "Открыть плеер",
            "buttons.promo-activate-service.text": "Попробовать бесплатно",
            "buttons.refresh-page": "Обновить страницу",
            "buttons.confirm": "Подтвердить",
            "buttons.expand": "Раскрыть",
            "buttons.collapse": "Свернуть",
            "buttons.expand-all": "Развернуть всё",
            "buttons.collapse-all": "Свернуть всё"
        }, "ru")
    }(window._ivideon && window._ivideon.lang),
    function(e) {
        "use strict";
        e && e.addMessages("ivnm/web-app-shared-l10n/l10n/dialogs", {
            "dlg.message.title": "Сообщение",
            "dlg.message.button.close": "Закрыть",
            "dlg.error.title": "Ошибка",
            "dlg.info.title": "Информация",
            "dlg.confirm.title": "Подтверждение",
            "dlg.confirm.button.yes": "Да",
            "dlg.confirm.button.no": "Нет",
            "dlg.prompt.title": "Ввод",
            "dlg.prompt.button.yes": "ОК",
            "dlg.prompt.button.no": "Отменить"
        }, "ru")
    }(window._ivideon && window._ivideon.lang),
    function(e) {
        "use strict";
        e && e.addMessages("ivnm/web-app-shared-l10n/l10n/wizards", {
            "buttons.retry.text": "Попробовать снова",
            "buttons.done.text": "Готово",
            "buttons.next.text": "Продолжить",
            "buttons.back.text": "Назад",
            "buttons.close.text": "Закрыть",
            "buttons.cancel.text": "Отмена",
            "buttons.rename.text": "Переименовать",
            "buttons.remove.text": "Удалить",
            "buttons.add.text": "Добавить",
            "buttons.add_more.text": "Добавить еще",
            "buttons.connect.text": "Подключить",
            "buttons.link.text": "Привязать",
            "buttons.yes.text": "ОК",
            "buttons.configure.text": "Настроить",
            "buttons.submit.text": "Отправить",
            "buttons.save.text": "Сохранить",
            "buttons.refresh.text": "Обновить",
            "buttons.apply.text": "Применить",
            "buttons.reset.text": "Сбросить",
            "buttons.download.text": "Скачать",
            "buttons.edit.text": "Редактировать",
            "progress.title": "Пожалуйста, подождите",
            "error.title": "Произошла ошибка",
            "error.description.with_retry": "Повторите попытку, в случае повторного возникновения ошибки, пожалуйста, обратитесь в нашу техническую поддержку по адресу {:support_email_link}.",
            "error.description.without_retry": "Пожалуйста, обратитесь в нашу техническую поддержку по адресу {:support_email_link}.",
            "error.message.with_retry": "Произошла ошибка. Повторите попытку, в случае повторного возникновения ошибки, пожалуйста, обратитесь в нашу техническую поддержку по адресу {:support_email_link}.",
            "info.contact_service_provider.title": "Обратитесь к провайдеру сервиса для подключения услуги",
            "info.empty-data-message.tittle": "Нет данных",
            "error.message.short": "Произошла ошибка. Попробуйте снова или обратитесь в\xa0службу технической поддержки.",
            "error.message.data-load": "При загрузке данных произошла ошибка",
            "error.message.email-list.invalid-list": "Список email-адресов введён некорректно. Проверьте правильность написания: {emailList}",
            "error.message.email-list.max-count-exceeded": "Можно указать не больше {maxCount} {maxCount:plural(получателя,получателей,получателей,получателя)}.",
            "info.contact-support-for-help": "Если вам нужна помощь, свяжитесь с\xa0нашей технической поддержкой по\xa0адресу {:support_email_link}."
        }, "ru")
    }(window._ivideon && window._ivideon.lang),
    function(e) {
        "use strict";
        e && e.addMessages("ivnm/web-app-shared/api/json-api/l10n/index", {
            "error.network": "Произошла ошибка отправки запроса. Проверьте соединение с\xa0Интернет.",
            "error.network.with-retry": "Произошла ошибка отправки запроса. Проверьте соединение с\xa0Интернет.<br/>Попробуйте {try_again_link_}повторить{_try_again_link}.",
            "error.timeout": "Время ожидания ответа на запрос истекло. Проверьте соединение с Интернет.",
            "error.abort": "Запрос был прерван.",
            "error.http": "Произошла непредвиденная ошибка. Попробуйте ещё раз. Если ошибка повторяется, сообщите обстоятельства в Службу технической поддержки.",
            "error.parse": "Произошла непредвиденная ошибка. Попробуйте ещё раз. Если ошибка повторяется, сообщите обстоятельства в Службу технической поддержки."
        }, "ru")
    }(window._ivideon && window._ivideon.lang),
    function(e) {
        "use strict";
        e && e.addMessages("ivnm/web-app-shared/timeline/timeline-calendar/l10n/index", {
            "dialog.title": "Выберите дату"
        }, "ru")
    }(window._ivideon && window._ivideon.lang),
    function(e) {
        "use strict";
        e && e.addMessages("ivnm/web-app-ui-components/forms/datepicker/l10n/index", {
            "buttons.today.text": "сегодня {date}",
            "date_select.input.date_empty": "Выберите дату",
            "range_select.input.date_empty": "Выберите диапазон дат",
            "range_select.dialog.title": "Выберите диапазон дат",
            "range_select.dialog.title.date": "Выберите дату",
            "range_select.dialog.time.label": "ВРЕМЯ",
            "range_select.dialog.time.start.label": "с",
            "range_select.dialog.time.end.label": "по"
        }, "ru")
    }(window._ivideon && window._ivideon.lang),
    function(e) {
        "use strict";
        e && e.addMessages("ivnm/web-app-ui-components/notify/l10n/UiNotifyCounter", {
            "notify.counter": "{current} из {total}"
        }, "ru")
    }(window._ivideon && window._ivideon.lang),
    function(e) {
        "use strict";
        e && e.addMessages("ivnm/web-app-video-player/src/l10n/index", {
            "archive-motion-search.title": "Поиск в архиве",
            "playback-controls.speed.tooltip": "Скорость воспроизведения архива",
            "playback-controls.speed.menu.title": "Скорость",
            "playback-controls.play.tooltip": "Воспроизведение",
            "playback-controls.stop.tooltip": "Остановить",
            "playback-controls.pause.tooltip": "Пауза",
            "playback-controls.status.live.text": "Live",
            "playback-controls.status.live.tooltip": "Живое видео",
            "playback-controls.to-live.text": "Live",
            "playback-controls.to-live.tooltip": "Перейти к\xa0живому видео",
            "playback-controls.fullscreen.tooltip.enter": "Во\xa0весь экран",
            "playback-controls.fullscreen.tooltip.exit": "Выйти из\xa0полноэкранного режима",
            "playback-controls.rewind.backward.tooltip": "Назад на {amount} сек",
            "playback-controls.rewind.forward.tooltip": "Вперёд на {amount} сек",
            "playback-controls.pin-button.tooltip.pin": "Закрепить интерфейс",
            "playback-controls.pin-button.tooltip.unpin": "Открепить интерфейс",
            "playback-controls.volume.tooltip": "Громкость",
            "playback-controls.volume.tooltip.disabled": "Звук отключен",
            "playback-controls.volume.mute.tooltip.mute": "Выключить звук",
            "playback-controls.volume.mute.tooltip.unmute": "Включить звук",
            "playback-controls.ptz.text": "PTZ",
            "playback-controls.ptz.tooltip.enable": "Показать PTZ",
            "playback-controls.ptz.tooltip.disable": "Скрыть PTZ",
            "playback-controls.settings.video-quality.title": "Качество воспроизведения",
            "playback-controls.settings.highlight-archive-records.title": "Подсветка архива",
            "playback-controls.settings.highlight-archive-records.values.off.short": "Выкл.",
            "playback-controls.settings.highlight-archive-records.values.off": "Выключена",
            "playback-controls.settings.highlight-archive-records.values.on.short": "Вкл.",
            "playback-controls.settings.highlight-archive-records.values.on": "Локальный\xa0/ Облачный",
            "playback-controls.settings.pin-panels.title": "Закрепить интерфейс",
            "playback-controls.settings.sound.on.title": "Включить звук",
            "playback-controls.settings.sound.off.title": "Выключить звук",
            "playback-controls.settings.pin-panels.value.off": "Нет",
            "playback-controls.settings.pin-panels.value.on": "Да",
            "playback-controls.settings.camera-settings.title": "Меню камеры",
            "playback-controls.settings.camera-settings-access.title": "Доступ к\xa0камере",
            "playback-controls.download": "Скачать ролик",
            "playback-controls.settings.share.title": "Поделиться",
            "playback-controls.settings.abuse.title": "Пожаловаться",
            "playback-controls.settings.statistics.title": "Техническая информация",
            "playback-controls.settings.low-latency-mode.title": "Low latency",
            "playback-controls.settings.archive-export.title": "Экспорт архива",
            "hotkeys.space": "Пробел",
            "help-modal.sections.timeline.title": "Таймлайн",
            "help-modal.sections.timeline.zoom": "Чтобы изменить <b>масштаб</b> таймлайна, используйте колесо мыши или тачпад.",
            "help-modal.sections.timeline.scroll": "Чтобы <b>прокрутить</b> таймлайн вперёд или назад, зажмите левую кнопку мыши и\xa0потяните таймлайн в\xa0нужную сторону.",
            "help-modal.sections.hotkeys.title": "Горячие клавиши",
            "help-modal.sections.hotkeys.playback": "Пауза\xa0/ Воспроизведение\xa0/ Остановить",
            "help-modal.sections.hotkeys.rewind": "Перемотка\xa0на {amount} секунд назад\xa0/ вперед (удерживайте для перемотки на\xa0большее время)",
            "help-modal.sections.hotkeys.volume": "Регулировка звука (удерживайте для непрерывной регулировки громкости)",
            "help-modal.sections.hotkeys.mute": "Включить\xa0/ выключить звук",
            "help-modal.sections.hotkeys.live": "Перейти к\xa0живому видео",
            "help-modal.sections.hotkeys.pin-panels": "Закрепить\xa0/ открепить интерфейс (открепите интерфейс, отведите мышь в\xa0сторону, и\xa0интерфейс плеера скроется)",
            "help-modal.sections.hotkeys.fullscreen": "Перейти в\xa0полноэкранный режим\xa0/ выйти",
            "help-modal.sections.hotkeys.events": "Отобразить / Скрыть события",
            "help-modal.sections.hotkeys.archive-bookmarks-toggle": "Отобразить / Скрыть закладки",
            "help-modal.sections.hotkeys.archive-bookmarks-add": "Добавить закладку",
            "help-modal.sections.low-latency-mode.title": "Low latency",
            "help-modal.sections.low-latency-mode.text": "Чтобы живое видео меньше отставало от\xa0реального времени, включите режим {low_latency_mode_name}. Учтите, что это может вызвать небольшие проблемы с\xa0воспроизведением.",
            "status-indicator.rewind.text": "{amount} сек",
            "timeline.controls.prev-day.tooltip": "Предыдущий день",
            "timeline.controls.next-day.tooltip": "Следующий день",
            "timeline.plugins.archive-motion-search.button": "Поиск в\xa0архиве",
            "timeline.plugins.archive-motion-search.small-screen-size-popup.title": "Сообщение",
            "timeline.plugins.archive-motion-search.small-screen-size-popup.message": "Размер экрана недостаточен для интерфейса поиска в\xa0архиве. <br /><br /> Попробуйте открыть эту страницу на\xa0другом устройстве или увеличить окно браузера.",
            "timeline.plugins.archive-export.button": "Экспорт",
            "timeline.plugins.archive-export.notifications.selection": "Фрагмент для экспорта: {startTime}\xa0— {endTime}",
            "timeline.plugins.archive-export.notifications.progress": "Подготовка…",
            "timeline.plugins.archive-export.notifications.done": "Скачать фрагмент можно на\xa0странице {link_}Экспорт архива{_link}",
            "timeline.plugins.archive-export.notifications.error": "Не\xa0удалось экспортировать запись. {link_}Попробуйте повторить{_link}",
            "timeline.plugins.archive-export.buttons.export": "Экспортировать",
            "timeline.plugins.archive-export.buttons.cancel": "Отмена",
            "timeline.plugins.archive-export.errors.no-visible-records": "На\xa0видимом участке таймлайна нет записей",
            "timeline.plugins.archive-export.errors.no_records_in_range": "Выделенный фрагмент не\xa0содержит доступных для экспорта записей.",
            "timeline.plugins.archive-datepicker.popup.title": "Выберите дату",
            "timeline.plugins.zoom.tooltip": "Масштабируйте таймлайн колесом мыши",
            "timeline.plugins.legend.title": "Обозначения на таймлайне",
            "timeline.plugins.legend.description.highlight-archive-records": "Активна подсветка записей по\xa0типу архива.",
            "timeline.plugins.legend.types.local.description": "Локальные записи",
            "timeline.plugins.legend.types.cloud.description": "Записи в\xa0облаке",
            "timeline.plugins.legend.types.motion.description": "Движение",
            "timeline.plugins.save-frame.title": "Сохранить кадр",
            "site-security.connect.title": "Подключить охрану",
            "site-security.send-alert.title": "Вызвать охрану",
            "error.camera-offline.message": "Повторите попытку через несколько минут.<br />Проверьте соединение с\xa0интернет и\xa0настройки камеры.",
            "error.video-ended.live.title": "Просмотр живого видео закончился",
            "error.video-stalled.title": "Не удалось загрузить видео",
            "error.not-found.title": "Видео не\xa0найдено",
            "error.access-denied.message": "Доступ запрещен",
            "error.subject-right-missing.message": "Камера недоступна. Возможно, владелец камеры ограничил доступ к ней.",
            "error.archive-not-available.title": "Просмотр архива не\xa0доступен",
            "error.generic.title": "Видео недоступно",
            "error.buttons.retry": "Загрузить видео снова",
            "error.codec-not-supported.h265.main": "Ваш браузер не поддерживает видеокодек H.265. Чтобы смотреть видео с этой камеры, воспользуйтесь браузерами последней версии: Google Chrome (Windows, macOS), Safari (macOS).",
            "error.codec-not-supported.h265.secondary": " Вы также можете открыть эту камеру в нашем мобильном приложении для {ios_link_}iOS{_ios_link} или {android_link_}Android{_android_link}.",
            "error.switch-to-no-sound": "Ошибка формата видео. Пробуем воспроизвести видео без звука.",
            "error.fullscreen.not-available": "Не удалось войти в полноэкранный режим",
            "menu.close": "Закрыть меню",
            "time-selector.title": "Укажите время",
            "time-selector.from": "Начиная с",
            "time-selector.to": "Заканчивая",
            "time-selector.confirm": "Подтвердить",
            "time-selector.close": "Закрыть",
            "sidebar.collapse": "Свернуть",
            "sidebar.expand": "Развернуть",
            "timeline_status.loading": "Получение архива…",
            "timeline_status.empty": "Нет записей",
            "quality.0": "Низкое качество",
            "quality.0.short": "Низкое",
            "quality.1": "Среднее качество",
            "quality.1.short": "Среднее",
            "quality.2": "Высокое качество",
            "quality.2.short": "Высокое",
            "dialog.idle_offline.title": "Онлайн-видео недоступно",
            "dialog.idle_offline.text": "Повторите попытку через несколько минут.<br/>Проверьте соединение с Интернет и настройки камеры.",
            "dialog.live_video_loading_error.title": "Онлайн-видео недоступно",
            "dialog.live_video_loading_error.text": "Повторите попытку через несколько минут.<br/>Проверьте соединение с Интернет и настройки камеры.",
            "dialog.live_video_loading_error.button.retry": "Повторить попытку",
            "dialog.live_streaming_limited.title": "Время непрерывного онлайн-просмотра ограничено",
            "dialog.live_streaming_limited.text": "Просмотр начался {playbackStartTime}. Ограничение: {playbackLimit}.",
            "dialog.live_streaming_limited.button.continue_live": "Продолжить онлайн-просмотр",
            "dialog.archive_streaming_limited.title": "Время непрерывного просмотра архива ограничено",
            "dialog.archive_streaming_limited.text": "Просмотр начался {playbackStartTime}. Ограничение: {playbackLimit}.",
            "dialog.archive_streaming_limited.button.continue_archive": "Продолжить просмотр архива",
            "dialog.archive_video_loading_error.title": "Архивная запись недоступна",
            "dialog.archive_video_loading_error.text": "Повторите попытку через несколько минут.<br/>Проверьте соединение с Интернет и настройки камеры.",
            "dialog.archive_video_loading_error.button.retry": "Повторить попытку",
            "dialog.archive_video_ended.title": "Просмотр архива закончился",
            "dialog.archive_video_ended.text": "Выберите архивную запись или запустите онлайн-просмотр.",
            "dialog.player_engine_error.title": "Не удалось запустить видеоплеер",
            "dialog.player_engine_error.text": "Попробуйте перезагрузить страницу.",
            "dialog.player_engine_error.select_engine.short.text": "Если ошибка сохраняется, попробуйте {link_account_settings_}другой видеоплеер{_link_account_settings}.",
            "dialog.player_engine_error.select_engine.full.text": "Если ошибка сохраняется, попробуйте другой видеоплеер. Вы можете изменить видеоплеер {link_camera_settings_}только для этой камеры{_link_camera_settings} или {link_account_settings_}для всех камер в аккаунте{_link_account_settings}.",
            "dialog.player_engine_error.button.retry": "Повторить попытку",
            "dialog.progress_error.closest_record_not_found.text": "Архив за {datetime} не найден",
            "dialog.progress_error.closest_record_network_error.text": "При поиске архивной записи произошла ошибка",
            "dialog.progress_error.closest_record_network_error.button.retry": "Попробовать снова",
            "archive-record-unavailable-message.title": "Архив за {datetime} недоступен",
            "archive-record-unavailable-message.description.change-plan": "Для просмотра выбранного отрезка локального архива смените тариф.",
            "archive-record-unavailable-message.description.contact-service-provider": "Обратитесь к\xa0провайдеру сервиса.",
            "archive-record-unavailable-message.description.contact-owner": "Обратитесь к\xa0владельцу камеры.",
            "archive-record-unavailable-message.button.change-plan": "Сменить тариф",
            "archive-record-unavailable-message.description.configure-camera-subscriptions": "Чтобы смотреть выбранный вами участок локального архива на\xa0этой камере, нужно настроить её\xa0подписку.",
            "archive-record-unavailable-message.button.configure-camera-subscriptions": "Настроить подписки",
            "embed-sharing.title": "Поделиться",
            "embed-sharing.description": "Хотите встроить видео на сайт?"
        }, "ru")
    }(window._ivideon && window._ivideon.lang),
    function(e) {
        "use strict";
        e && e.addMessages("ivnm/web-app-video-player/src/ui/components/streaming-connection-quality/l10n/connection-quality", {
            title: "Статус подключения ({camera})",
            "connection.preface": "Плохая связь может влиять на\xa0качество видео и\xa0звука с\xa0камеры, а\xa0также быть причиной задержек и\xa0нестабильной записи архива.",
            "connection.notification": "Проблемы с подключением",
            "fields.speed": "Скорость: <b>{value}</b>",
            "fields.speed.required": "Требуемая скорость: <b>{value}</b>",
            "fields.wifi": "Уровень сигнала Wi-Fi: <b>{value}</b>",
            "fields.rtt": "Пинг: <b>{value}</b>",
            "wifi-signal.high": "Хороший",
            "wifi-signal.medium": "Средний",
            "wifi-signal.low": "Плохой",
            "units.ms": "мс",
            "units.kbits": "кбит/с",
            camera: "Камера",
            cloud: "Облако",
            player: "Плеер",
            "hint.to-player.rtt": "Пинг\xa0— это время, за\xa0которое отправленный запрос достигает адресата и\xa0возвращается обратно. Чем ниже пинг, тем лучше связь.",
            "playback-controls.settings.quality-monitor.title": "Статус подключения"
        }, "ru")
    }(window._ivideon && window._ivideon.lang);
