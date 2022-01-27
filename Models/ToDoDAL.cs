using Dapper;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CapstoneTaskList.Models
{
    public class ToDoDAL
    {
        public List<ToDo> GetTasks()
        {
            string sql = "select * from todos";
            using (var connect = new MySqlConnection(Secret.Connection))
            {         
                connect.Open();
                List<ToDo> output = connect.Query<ToDo>(sql).ToList();
                connect.Close();
                return output;
            }
        }

        public ToDo GetTask(int id)
        {
            List<ToDo> output = GetTasks();
            ToDo match;
            try
            {
                match = output.Where(m => m.Id == id).First();
            }
            catch (InvalidOperationException)
            {
                match = new ToDo();
                match.TaskTitle = $"Assignment at index {id} does not exist, please try another id";
            }
            return match;
        }

        public void AddTask(ToDo nTD)
        {
            string sql = $"insert into todos values(0,'{nTD.FirstName}','{nTD.LastName}','{nTD.TaskTitle}','{nTD.Description}',{nTD.IsCompleted},{nTD.DueDate})";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<ToDo>(sql);
                connect.Close();
            }
        }

        public void DeleteTask(int id)
        {
            string sql = $"delete from todos where id ={id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<ToDo>(sql);
                connect.Close();
            }
        }

        public void UpdateTask(int Id, ToDo nTD)
        {
            string sql = $"update todos set FirstName='{nTD.FirstName}',LastName='{nTD.LastName}',TaskTitle='{nTD.TaskTitle}',Description=`{nTD.Description}`,IsComplete={nTD.IsCompleted},DueDate={nTD.DueDate} where id={Id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<ToDo>(sql);
                connect.Close();
            }

        }
    }
}
