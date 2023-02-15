interface ResData {
    [PropsType: string]: any
    userid: number
    id: number
    title: string
    body: string
}

class FifteenthTitle {
    static #URL = 'https://jsonplaceholder.typicode.com/posts'
    static #ID = 15

    static  #get() {
        fetch(FifteenthTitle.#URL)
        .then(res => {
            if (res.ok) {
            return res.json() // Вопрос по заданию
            }
        })
        .then(resData => FifteenthTitle.#getTitleFromJson(resData))
        .then(title => console.log(title))
        .catch(({ message }) => console.error(message))
    }
    
    static #getTitleFromJson(resData: ResData) {
    const itemWithTitle = resData.find(item => item.id === FifteenthTitle.#ID)
    const title = itemWithTitle.title
    return title
    }

    run() {
    FifteenthTitle.#get()
    }
}

const newfifteenthTitle = new FifteenthTitle()

newfifteenthTitle.run()