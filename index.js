const taskContainer = document.querySelector(".task_container");


// Global Store
const globalStore = [];

const newcard = ({ id, imageurl, TaskTitle, Taskdescription, TaskType }) => `<div class="col-md-6 col-lg-4">

<div class="card ">
  <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
    <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
  </div>
  <img
    src=${imageurl}
    class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${TaskTitle}</h5>
    <p class="card-text">${Taskdescription}</p>
    <span class="badge bg-primary">${TaskType}</span>
  </div>
  <div class="card-footer text-muted">
    <button type="button" class="btn btn-outline-primary float-end
          ">Open Task</button>
  </div>
</div>
</div>`

const loadInitialTaskCards = () => {
    // access localstorage
    const getInitialData = localStorage.getItem("tasky");
     if (!getInitialData) return;

    // convert stringified-objet to object
     const { cards } = JSON.parse(getInitialData);

    // map around the array to generate html card and inject it to dom
     cards.map((cardObject) => {
        const createnewcard = newcard(cardObject);
        taskContainer.insertAdjacentHTML("beforeend", createnewcard );
        globalStore.push(cardObject);
     })
}

const savechanges = () => {
    const taskData = {
        id: `${Date.now()}`,
        imageurl: document.getElementById("image url").value,
        TaskTitle: document.getElementById("Task Title").value,
        Taskdescription: document.getElementById("Task description").value,
        TaskType: document.getElementById("Task Type").value,

    };

    // HTML code
    const createnewcard = newcard(taskData);

    taskContainer.insertAdjacentHTML("beforeend", createnewcard );
    globalStore.push(taskData);
    
    // add to localstorage
    localStorage.setItem("tasky", JSON.stringify({cards: globalStore})) ;
     
};