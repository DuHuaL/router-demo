// 这里使用jsonp 跨域请求
import jsonp from 'jsonp';
const movieList = {
  namespaced: true,
  state: {
    title: '',
    subjects: []
  },
  mutations: {
    // 给数据赋值
    setData(state, payload) {
      state.title = payload.title;
      state.subjects = payload.subjects;
    }
  },
  actions: {
    // 发送请求获取数据
    // axios不能跨域，这是使用jsonp
    setData(context) {
      // 发送请求
      jsonp('https://api.douban.com/v2/movie/in_theaters', null, (error, data) => {
        if (error) {
          console.log(error);
        }
        // 第一中写法
        // context.commit({
        //   type: 'setData',
        //   title: data.title,
        //   subjects: data.subjects
        // });

        // d第二种写法
        context.commit({
          type: 'setData',
          ...data
        });
      });
    }
  }
};
export default movieList;
