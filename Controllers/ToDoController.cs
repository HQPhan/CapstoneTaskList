using CapstoneTaskList.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CapstoneTaskList.Controllers
{
    [ApiController]
    [Route("controller")]
    public class ToDoController
    {
        ToDoDAL td = new ToDoDAL();

        [HttpGet]
        public List<ToDo> GetTasks()
        {
            return td.GetTasks();
        }

        [HttpGet("get/{id}")]
        public ToDo GetTask(int id)
        {
            return td.GetTask(id);
        }

        [HttpPost("addtask")]
        public void PostTask(ToDo doThis)
        {
            td.AddTask(doThis);
        }

        [HttpDelete("delete/{id}")]
        public void DeleteTask(int id)
        {
            td.DeleteTask(id);
        }

        [HttpPut("update/{id}")]
        //The movie object will come from the body of the http call
        public void UpdateMovie(int Id, ToDo tD)
        {
            ToDo currentTask = td.GetTask(Id);
            if (tD.FirstName == null || tD.FirstName == "")
            {
                tD.FirstName = currentTask.FirstName;
            }

            if (tD.LastName == null || tD.LastName == "")
            {
                tD.LastName = currentTask.LastName;
            }

            if (tD.TaskTitle == null || tD.TaskTitle == "")
            {
                tD.TaskTitle = currentTask.TaskTitle;
            }

            if (tD.Description == null || tD.Description == "")
            {
                tD.Description = currentTask.Description;
            }

            if (tD.IsCompleted == null || tD.IsCompleted == "")
            {
                tD.IsCompleted = currentTask.IsCompleted;
            }

            if (tD.DueDate == null)
            {
                tD.DueDate = currentTask.DueDate;
            }

            td.UpdateTask(Id, tD);
        }
    }
}
