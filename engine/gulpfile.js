var gulp = require('gulp');
var babel = require("gulp-babel");
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var header = require('gulp-header');
var mergeStream = require('merge-stream');

gulp.task("default", function() {
  var libs = gulp
    .src([
      'lib/paper.js',
      'lib/SAT.js',
      'lib/atomic.js',
      'lib/base64-arraybuffer.js',
      'lib/convert-range.js',
      'lib/croquis.js',
      'lib/esprima.js',
      'lib/floodfill.min.js',
      'lib/howler.js',
      'lib/invert.min.js',
      'lib/is-var-name.js',
      'lib/jquery-3.3.1.min.js',
      'lib/jquery.pressure.js',
      'lib/jquery.mousewheel.js',
      'lib/jszip.js',
      'lib/lerp.js',
      'lib/platform.js',
      'lib/potrace.js',
      'lib/reserved-words.js',
      'lib/timestamp.js',
      'lib/soundcloud-waveform.js',
      'lib/Tween.js',
      'lib/uuid.js'
    ]);

  var src = gulp
    .src([
      'src/Wick.js',
      'src/Clipboard.js',
      'src/FileCache.js',
      'src/History.js',
      'src/ObjectCache.js',
      'src/Transformation.js',
      'src/ToolSettings.js',
      'src/ObjectCache.js',
      'src/Transformation.js',
      'src/GlobalAPI.js',
      'src/export/AudioTrack.js',
      'src/export/WickFile.js',
      'src/export/WickFile.Alpha.js',
      'src/base/Base.js',
      'src/base/Layer.js',
      'src/base/Project.js',
      'src/base/Selection.js',
      'src/base/Timeline.js',
      'src/base/Tween.js',
      'src/base/Path.js',
      'src/base/asset/Asset.js',
      'src/base/asset/FileAsset.js',
      'src/base/asset/ImageAsset.js',
      'src/base/asset/ClipAsset.js',
      'src/base/asset/SoundAsset.js',
      'src/base/asset/FontAsset.js',
      'src/base/Tickable.js',
      'src/base/Frame.js',
      'src/base/Clip.js',
      'src/base/Button.js',
      'src/tools/Tool.js',
      'src/tools/Brush.js',
      'src/tools/Cursor.js',
      'src/tools/Ellipse.js',
      'src/tools/Eraser.js',
      'src/tools/Eyedropper.js',
      'src/tools/FillBucket.js',
      'src/tools/Interact.js',
      'src/tools/Line.js',
      'src/tools/None.js',
      'src/tools/Pan.js',
      'src/tools/PathCursor.js',
      'src/tools/Pencil.js',
      'src/tools/Rectangle.js',
      'src/tools/Text.js',
      'src/tools/Zoom.js',
      'src/view/paper-ext/Layer.erase.js',
      'src/view/paper-ext/Layer.hole.js',
      'src/view/paper-ext/Paper.OrderingUtils.js',
      'src/view/paper-ext/Paper.SelectionWidget.js',
      'src/view/paper-ext/Paper.SelectionBox.js',
      'src/view/paper-ext/Path.potrace.js',
      'src/view/paper-ext/TextItem.edit.js',
      'src/view/paper-ext/View.pressure.js',
      'src/view/paper-ext/View.gestures.js',
      'src/view/paper-ext/View.scrollToZoom.js',
      'src/view/View.js',
      'src/view/View.Project.js',
      'src/view/View.Selection.js',
      'src/view/View.Clip.js',
      'src/view/View.Button.js',
      'src/view/View.Timeline.js',
      'src/view/View.Layer.js',
      'src/view/View.Frame.js',
      'src/view/View.Path.js',
      'src/gui/GUIElement.js',
      'src/gui/Clickable.js',
      'src/gui/Draggable.js',
      'src/gui/AddFrameOverlay.js',
      'src/gui/Breadcrumbs.js',
      'src/gui/BreadcrumbsButton.js',
      'src/gui/CreateLayerLabel.js',
      'src/gui/Frame.js',
      'src/gui/FrameEdge.js',
      'src/gui/FrameGhost.js',
      'src/gui/FrameLeftEdge.js',
      'src/gui/FrameRightEdge.js',
      'src/gui/FramesContainer.js',
      'src/gui/FramesContainerBG.js',
      'src/gui/FramesStrip.js',
      'src/gui/LayerButton.js',
      'src/gui/LayerGhost.js',
      'src/gui/LayerHideButton.js',
      'src/gui/LayerLabel.js',
      'src/gui/LayerLockButton.js',
      'src/gui/LayersContainer.js',
      'src/gui/LayersContainerBG.js',
      'src/gui/LayerTweenButton.js',
      'src/gui/NumberLine.js',
      'src/gui/OnionSkinRange.js',
      'src/gui/OnionSkinRangeEnd.js',
      'src/gui/OnionSkinRangeStart.js',
      'src/gui/Playhead.js',
      'src/gui/Project.js',
      'src/gui/Scrollbar.js',
      'src/gui/ScrollbarGrabberHorizontal.js',
      'src/gui/ScrollbarGrabberVertical.js',
      'src/gui/ScrollbarHorizontal.js',
      'src/gui/ScrollbarVertical.js',
      'src/gui/SelectionBox.js',
      'src/gui/Timeline.js',
      'src/gui/TimelineAddFrameButton.js',
      'src/gui/TimelineDeleteLayerButton.js',
      'src/gui/Tween.js',
      'src/gui/TweenGhost.js',
    ])
    .pipe(header('/*Wick Engine https://github.com/Wicklets/wick-engine*/'))
    .pipe(babel());

  return mergeStream(libs, src)
    .pipe(concat('wickengine.js'))
    .pipe(gulp.dest('dist'));
});
