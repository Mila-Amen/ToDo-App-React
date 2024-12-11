export default function ToDoContainer(){
  return(
    <div className="container-dones">
          <h2>Done Tasks</h2>
          <div className="done-item">
            <p>Exercises</p>
            <div className="action">
              <button className="btn">&#10004;</button>
            </div>
          </div>
        </div>
  )
}