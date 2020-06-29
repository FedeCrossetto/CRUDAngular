using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace angular.Models
{
    public class Materia
    {
      
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Profesor { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaFin { get; set; }
    }
}
