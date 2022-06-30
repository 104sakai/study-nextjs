import { useState, useEffect, useMemo, useCallback } from 'react'

const HelloWorld = () => {
  const [sample, setSample] = useState()

  // ページが呼ばれると、上から順に実行されていく。
  console.log('HelloWorld const section.')

  console.log('HelloWorld Effect before.')

  const count = 1
  const outStr = useMemo(() => {
    console.log('output String')
    const _outstr = 'Welcome to HelloWorld.' + count
    return _outstr
  }, [count])

  const onSubmit = () => {
    console.log('submit')
  }

  // useEffectは、すべてのレンダーが終わったら最後に実行される。
  useEffect(() => {
    /* 
      useEffectがレンダーされたあとは、
      故意でなければレンダーされないという感じ。

      useEffectで定義した変数が使えないのはこれ。
      あくまでレンダー後の演出ということ。

      使いたければuseStateを使って状態管理した上で、
      依存関係として再レンダーを第二引数のArray内にいれる。
    */
    console.log('HelloWorld useEffect.')
  }, [])

  return (
    <>
      {console.log('HelloWorld Page Render')}
      <header>
        <title>HelloWorld Title</title>
      </header>
      <section>
        <h1>HelloWorld Page</h1>
        <div>{outStr}</div>
      </section>
    </>
  )
}

export default HelloWorld