using System;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Game : IModel
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Publisher { get; set; }
        public DateTime? Launch { get; set; }
    }
}
