interface ResData {
    [PropsType: string]: any
    userid: number
    id: number //  Первый вопрос (тип данных)
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
            return res.json() //Второй вопрос (оператор)
            }
        })
        .then(resData => FifteenthTitle.#getTitleFromJson(resData))
        .then(title => console.log(title))
        .catch(({ message }) => console.error(message))
    }
    
    static #getTitleFromJson(resData: ResData) {
    const itemWithTitle = resData.find(item => item.id === FifteenthTitle.#ID) // Третий вопрос (метод перебора массива с объектами для поиска необходимого элемента с необходимым id)
    const title = itemWithTitle.title
    return title //Четвертый вопрос (оператор) 
    }

    run() {
    FifteenthTitle.#get()
    }
}

const fifteenthTitle = new FifteenthTitle()

fifteenthTitle.run()