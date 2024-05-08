using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CheesecakeOrdering.Data;

public class CheescakeOrderDataContextFactory : IDesignTimeDbContextFactory<CheescakeOrderDataContext>
{
    public CheescakeOrderDataContext CreateDbContext(string[] args)
    {
        var config = new ConfigurationBuilder()
           .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), 
           $"..{Path.DirectorySeparatorChar}CheesecakeOrdering.Web"))
           .AddJsonFile("appsettings.json")
           .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

        return new CheescakeOrderDataContext(config.GetConnectionString("ConStr"));
    }
}