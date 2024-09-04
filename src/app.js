export default {
    inject: ["page"],
    template: `
      <h1>Teste</h1>
      Msg is {{ msg }}
      <button @click="fazAlgo">fazAlgo</button>
    `,
    data() {
        return {
            msg: "message"
        }
    },
    mounted() {
        console.log("app mounted");
        //console.log("page",this.page);
        
    },
    methods: {
        async fazAlgo() {
            console.log("fazAlgo")
            
            let resp = await fetch("https://api.github.com/repos/mmamorim/testesite01/git/trees/main?recursive=1")
            console.log("resp",resp);
            let json = await resp.json()
            console.log("json",json);
        }
    }
}