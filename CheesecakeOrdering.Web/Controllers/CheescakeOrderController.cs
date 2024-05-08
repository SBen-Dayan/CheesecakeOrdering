using CheesecakeOrdering.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CheesecakeOrdering.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CheescakeOrderController : ControllerBase
    {
        private readonly string _conStr;

        public CheescakeOrderController(IConfiguration configuration)
        {
            _conStr = configuration.GetConnectionString("conStr");
        }

        [HttpGet("getAll")]
        public List<CheescakeOrder> GetAll() => new CheescakeOrderRepository(_conStr).GetAll();

        [HttpGet("getOrder")]
        public CheescakeOrder GetById(int id) => new CheescakeOrderRepository(_conStr).GetById(id);

        [HttpPost("addOrder")]
        public void Insert(CheescakeOrder cheescakeOrder) => new CheescakeOrderRepository(_conStr).Insert(cheescakeOrder);
    }
}
