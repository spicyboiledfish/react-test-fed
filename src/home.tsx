import React from 'react';
import './style/index.less';

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  //这是采用不理想的写法
  handleChildren = () => {
    console.log('clicked ChildrenComponent');
  };
  //这是采用不理想的写法
  handleParent = () => {
    console.log('clicked ParentComponent');
    this.setState((preCount) => ({ count: +preCount + 1 }));
  };

  render() {
    return (
      <div>
        <div onClick={this.handleParent}>ParentComponent</div>
        <ChildrenComponent handleChildren={this.handleChildren} />
      </div>
    );
  }
}

class ChildrenComponent extends React.PureComponent<{ handleChildren: () => void }, {}> {
  render() {
    const { handleChildren } = this.props;
    console.log('ChildrenComponent rending');
    return (
      <div onClick={handleChildren} style={{ marginTop: '30px' }}>
        ChildrenComponent
      </div>
    );
  }
}

export default ParentComponent;

// useCallback: 当父组件中有子组件的时候。会出现的情况是。在父组件的某一个state状态发生改变的时候，子组件会重复渲染。从而起到了优化的作用。
// 方法：通过useCallback、配合memo，用来优化子组件的渲染次数
// 传参: callback函数，deps需要引入的外部参数或者依赖参数
// 返回值：返回一个memoized函数，在依赖参数不变的情况下，返回的回调函数是同一个引用地址。
// 当依赖项参数发生改变，useCallback会自动重新返回一个新的memozied函数，就会重新渲染
