using System;
using System.ComponentModel.DataAnnotations;

namespace TestePraticoWevo.Models
{
    public class Person
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string CPF { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public DateTime? Birthday { get; set; }
    }
}
