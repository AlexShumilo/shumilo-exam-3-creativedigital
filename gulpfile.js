const gulp = require('gulp'); // Подключение гульпа
const PublishApplicationTask = require('./tasks/publish-application-task');
const WatchTask = require('./tasks/watch-task');


/**
 * Тут мы регистрируем нашу вышеописанную задачу publishRootFiles в гульпе
 */
gulp.task('publish', PublishApplicationTask);


/**
 * Тут мы добавляем файл вотчер, который будет запускать publishCssAndAddBrowserPrefixes задачу при изменении css файлов
 */
gulp.task('watch', WatchTask);

/**
 * Тут мы проставляем задачу по-умолчанию
 */
gulp.task('default', ['watch']);