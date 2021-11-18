const listsContainer = document.querySelector("[data-lists]" )
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
const deletListButton = document.querySelector('[data-delete-list-button]')

const listDisplayContainer = document.querySelector('[data-list-display-container]')
const listTitleElement = document.querySelector('[data-list-title]')
const listCountElement = document.querySelector('[data-list-count]')
const taskContainer = document.querySelector('[data-tasks]')

const LOCAL_STORAGE_LIST_KEY = 'task.lists'
const LOCAL_STORAGE_SELECTED_LIST_KEY = 'task.selectedListId'
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY) || [] )
let selectedListId = local.Storage.getItem(LOCAL_STORAGE_SELECTED_LIST_KEY)

listsContainer.addEventListener('click', e =>  {
    if(e.target.tagName.toLowerCase() === 'li')
    selectedlistId = e.target.dataset.listId

})

deleteListButton.addEventListener('click', e => {
    lists = lists.filter(list => lists.id !== selectedListId)
    selectedListId = null
    SaveAndRender()
})


newListForm.addEventListener('submit', e => {
    e.preventDefault()
    const listName = newListInput.value
    if (listName == null || listName === '') return 
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    SaveAndRender()
})

function createList(name){
   return {id: Date.now().toString(), name: name, tasks: []
       {
        id: 1,
        name: 'sdasf'
        completed: false
       }
   ]}
}

function SaveAndRender(){
    save()
    render()
}

function save(){
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
    localStorage.setItem(LOCAL_STORAGE_LIST_ID_KEY, selectedListId)
}

function render() {
    clearElement(listsContainer)
    renderLists()
    const selectedList = lists.find(list => list.id === selectedListId)
    if (selectedListId == null)
        listDisplayContainer.style.display = 'none'
    else {
        listDisplayContainer.style.display = ''
        listTitleElement.innerText = selectedList.name
        renderTaskCount(selectedList)
        clearElement(taskContainer)
        renderTasks(selecList)
    }
} 

function renderTasks(selectedList){
    selectedList.tasks.forEach(task => {
        
    })
}

function renderTaskCount(selectedList){
    const incompleteTasks = selectedList.tasks.filter(task => task.complete).length
    const taskString = incompleteTaskCount === 1 ? "task" : "tasks"
    listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`
}

function renderLists(){
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.dataset.listId = list.id
        listElement.classList.add("list-name");
        listElement.innerText = list.name
        if(list.id === selectedListId){
            listElement.classList.add('active-list')
        }
        listsContainer.appendChild(listElement)
    })
}

function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}

render()