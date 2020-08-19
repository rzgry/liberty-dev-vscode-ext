// from https://github.com/redhat-developer/vscode-microprofile/blob/master/gulpfile.js
const gulp = require('gulp');
const cp = require('child_process');

const libertyLSName = 'openliberty-ls-1.0-SNAPSHOT.jar';
const libertyLSDir = '../liberty-language-server';

gulp.task('buildServer', (done) => {
  cp.execSync(mvnw() + ' clean install -DskipTests', { cwd: libertyLSDir , stdio: 'inherit' });
  gulp.src(libertyLSDir + '/target/' + libertyLSName)
    .pipe(gulp.dest('./jars'));
  done();
});

function mvnw() {
	return isWin() ? 'mvnw.cmd' : './mvnw';
}

function isWin() {
	return /^win/.test(process.platform);
}