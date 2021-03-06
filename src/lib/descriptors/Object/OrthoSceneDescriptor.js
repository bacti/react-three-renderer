import * as THREE from 'three';
import PropTypes from 'prop-types';

import Object3DDescriptor from './Object3DDescriptor';
import propTypeInstanceOf from '../../utils/propTypeInstanceOf';

class OrthoSceneDescriptor extends Object3DDescriptor {
  constructor(react3Instance) {
    super(react3Instance);

    this.hasProp('fog', {
      type: PropTypes.oneOfType([
        propTypeInstanceOf(THREE.Fog),
        propTypeInstanceOf(THREE.FogExp2),
      ]),
      simple: true,
      default: undefined,
    });
    this.hasProp('background', {
      type: PropTypes.oneOfType([
        propTypeInstanceOf(THREE.Color),
        PropTypes.number,
        PropTypes.string,
      ]),
      simple: true,
      default: undefined,
    });
  }

  applyInitialProps(threeObject: THREE.Scene, props) {
    super.applyInitialProps(threeObject, props);
    threeObject.background = new THREE.Color( props.background );
  }

  construct() {
    let scene = new THREE.Scene();
    scene.type = 'OrthoScene'
    return scene
  }
}

module.exports = OrthoSceneDescriptor;
