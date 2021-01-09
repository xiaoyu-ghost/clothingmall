<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center"><h2>蘑菇街</h2></div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend :recommends="recommends" />
    <home-feature />
    <tab-control class="tab-control" :titles="['流行', '新款', '潮流']"  @btnClick="btnClick"/>
    <goods-list :goods = "goods[currenIndex].list"  />
    <ul>
      <li>sad</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>sad</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
      <li>s</li>
    </ul>
  </div>
</template>

<script>
  import {getHomeMutatidata, getHomeGoogs} from "../../network/home";
  import NavBar from '../../components/common/navbar/NavBar'
  import TabControl from '../../components/content/tabControl/TabControl'
  import GoodsList from '../../components/content/goods/GoodsList'

  import HomeSwiper from './homeChildren/HomeSwiper'
  import HomeRecommend from './homeChildren/HomeRecommend'
  import HomeFeature from './homeChildren/HomeFeture'

  export default {
    name: "Home",
    components:{
      NavBar,
      TabControl,
       GoodsList,

      HomeSwiper,
      HomeRecommend,
      HomeFeature
    },
    data(){
      return {
        banners:[],
        recommends:[],
        //默认为pop里面的数据
        currenIndex:'pop',
        goods:{
        //  请求数据，新款，流行和精选,
          'pop':{page:0, list:[]},
          'new':{page:0, list:[]},
          'sell':{page:0, list:[]}
        }
      }
    },
    //创建数据时回调函数用created
    created(){
     // 轮播图
     this.getHomeMutatidata(),
        // 数据，新款，流行和精选,
      this.getHomeGoogs('pop')
      this.getHomeGoogs('new'),
      this.getHomeGoogs('sell')

    },

    methods:{
      /*事件监听事件
      */
      btnClick(index){
        switch (index) {
          case 0:
            this.currenIndex = 'pop';
            break;
          case 1:
            this.currenIndex = 'new';
            break;
          case 2:
            this.currenIndex ='sell';
            break
        }
      },


      /**
       * 请求数据
       */
      getHomeMutatidata(){
        getHomeMutatidata().then(res =>{
          const result =  res.data;
          this.banners = result.data.banner.list;
          this.recommends = result.data.recommend.list
        })
      },
      // 回调数据新款，流行和精选,
      getHomeGoogs(type){
        //请求数据的有多少页
          const page = this.goods[type].page + 1;
        getHomeGoogs(type,page).then(res => {
          // console.log(res.data.data.list);
          const result = res.data;
          this.goods[type].list.push(...result.data.list);
          this.goods[type].page += 1
        })
      }

    }
  }
</script>

<style scoped>
  #home{
    margin-top: 44px;

  }
  .home-nav{
    background-color: #ff8198;
    color:white;
    display: inline-block;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
  }
  .tab-control{
    position: sticky;
    top: 44px;
  }

</style>
