using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CheesecakeOrdering.Data
{
    public class CheescakeOrder
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string BaseFlavor { get; set; }
        public string Toppings { get; set; }
        public string Requests { get; set;}
        public int Quantity { get; set; }
        public DateTime DeliveryDate { get; set; }
        [Column(TypeName = "Money")]
        public decimal Total { get; set; }
    }
}
