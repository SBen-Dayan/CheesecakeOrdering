using Microsoft.EntityFrameworkCore;
using System.Data;

namespace CheesecakeOrdering.Data;

public class CheescakeOrderDataContext : DbContext
{
    private readonly string _connectionString;

    public CheescakeOrderDataContext(string connectionString)
    {
        _connectionString = connectionString;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(_connectionString);
        
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        foreach (var relationship in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
        {
            relationship.DeleteBehavior = DeleteBehavior.Restrict;
        }
    }

    public DbSet<CheescakeOrder> CheescakeOrders { get; set; }
}