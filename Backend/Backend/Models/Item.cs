using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Item
    {
        [Key]
        public int id { get; set; }

        [Column(TypeName="nvarchar(50)")]
        public string name { get; set; }

        [Column]
        public int quantity { get; set; }

    }
}
