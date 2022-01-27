using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CapstoneTaskList.Models
{
    public class ToDo
    {
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string TaskTitle { get; set; }
        public string Description { get; set; }
        public string IsCompleted { get; set; }
        public DateTime DueDate { get; set; }

    }
}
