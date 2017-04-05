require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//获取图片信息
let imageDatas = require('../data/imageDatas.json');
//

//将图片名字转换为路径
imageDatas = (function genImageURL(imageDatasArr) {
	for (var i = 0; i < imageDatasArr.length; i++) {
		var singleImageData = imageDatasArr[i];

		singleImageData.imageURL = require('../images/' + singleImageData.fileName);

		imageDatasArr[i] = singleImageData;  
	}

	return imageDatasArr;
})(imageDatas);
//

class AppComponent extends React.Component {
  render() {
    return (
     <section class="stage">
     	<section class="img-sec">
     	</section>
     	<nav class="controller-nav">
     	</nav>
     </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
