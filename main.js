const { createApp } = Vue;

createApp({
  data() {
    return {
      message: 'Привіт, Vue!',
      apiUrl:'/apis/apiDisk.php',
      infoData:'',
    }

  },
  mounted (){
    this.API();
  },
  methods:{
    API(){
        axios.get(this.apiUrl)
        .then((res)=>{
            // salvo il contenuto dentro infodata
            this.infoData = res.data;
        })
    }
  }

}).mount('#app')