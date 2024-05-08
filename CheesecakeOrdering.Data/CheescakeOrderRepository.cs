using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CheesecakeOrdering.Data
{
    public class CheescakeOrderRepository
    {
        private readonly string _connectionString;

        public CheescakeOrderRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<CheescakeOrder> GetAll()
        {
            using var context = new CheescakeOrderDataContext(_connectionString);
            return context.CheescakeOrders.ToList();
        }

        public CheescakeOrder GetById(int id)
        {
            using var context = new CheescakeOrderDataContext(_connectionString);
            return context.CheescakeOrders.FirstOrDefault(c => c.Id == id);
        }

        public void Insert(CheescakeOrder cheescakeOrder)
        {
            using var context = new CheescakeOrderDataContext(_connectionString);
            context.CheescakeOrders.Add(cheescakeOrder);
            context.SaveChanges();
        }
    }
}
