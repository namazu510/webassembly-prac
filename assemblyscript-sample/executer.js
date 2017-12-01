// 試行回数
const TIME = 200
const res = []


// バイナリを読み込み
fetch('py_calc.wasm')
    .then(response => response.arrayBuffer())
    .then(buffer => WebAssembly.compile(buffer)) // ブラウザでコンパイル
    .then(module => WebAssembly.instantiate(module))   // インスタンス化
    .then(instance => {
        for(let i=0; i < TIME; i++) {
            const startTime = new Date().getTime()
            // assemblyでエクスポートした関数の実行
            const py = instance.exports.calcPy(100000000) //1億項計算する

            const endTime = new Date().getTime()

            console.log(py)
            res.push(endTime - startTime)
        }

        // 平均, 標準偏差を計算
        const sum = (array) => {
            return array.reduce((prev, crrent) => prev + crrent)
        }
        const avg = (array) => {
            return sum(array) / array.length
        }

        let avg_res = avg(res)
        let std_dev = Math.sqrt(sum(res.map(t => Math.pow(avg_res - t, 2))) / res.length)

        // 画面更新
        document.getElementById("out").innerText = `平均${avg_res}(ms)かかりました！　標準偏差${std_dev}`
    })
