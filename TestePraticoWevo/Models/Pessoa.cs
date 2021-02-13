using System;
using System.ComponentModel.DataAnnotations;

namespace TestePraticoWevo.Models
{
    public class Pessoa
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; }
        public string CPF { get; set; }
        public string Email { get; set; }
        public string Telefone { get; set; }
        public char Sexo { get; set; }
        public DateTime DataNascimento { get; set; }
    }
}
