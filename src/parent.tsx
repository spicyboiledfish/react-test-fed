import React, { useState, memo, useMemo, useCallback } from 'react';
import ChildrenComponent from './children';

const ParentComponent = () => {
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState(1);

  const computeExpensiveValue = (count) => {
    console.log('computeExpensiveValue 被执行');
    //比较大计算
    const array = [count, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return array.reduce((currentTotal, item) => {
      return currentTotal + item;
    }, 0);
  }

  const computeValue = useMemo(() => computeExpensiveValue(count), [count]);

  const handleChidren = useCallback(() => {
    console.log('handleChidlren is click');
  }, []);

  const handleParent = () => {
    console.log('handleParent is click');
    setCount((pre) => pre + 1);
  };

  const handlePageNum = () => {
    setPage((page) => page + 1);
  }

  return (
    <div className="parent-component">
      <div>{computeValue}</div>
      <div onClick={handleParent}>ParentComponent {count}</div>
      <div onClick={handlePageNum}>PageNum {page}</div>
      <ChildrenComponent handleChidren={handleChidren} />
    </div>
  );
};



export default ParentComponent;

// useMemo 针对当前组件内有高开销的计算，进行优化。避免每次组件渲染都执行这个方法导致计算庞大，优化性能
// 图中当前组件中任意一个state状态(例如page)发生改变的时候，组件会重新渲染，导致computeExpensiveValue一直执行。造成了不可避免的消耗
// 我们只希望在count这个值发生改变的时候，才去执行这个复杂的消耗性能的方法。那么就用到useMemo
// 传参：callback参数，需要有返回值；deps需要引入的外部参数或者依赖参数
// 返回值：返回一个memoized值，在依赖参数不变的情况下不会重新执行。返回的是上一次计算的值。只有当依赖参数发生改变的时候，useMemo就会重新计算一个新的memoized值
// 结果：现在点击pageNum之后，page变化，但是复杂函数不再执行了
