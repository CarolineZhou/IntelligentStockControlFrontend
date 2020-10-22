using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class StockDBContext : DbContext
    {
        public StockDBContext(DbContextOptions<StockDBContext> options) : base(options)
        {

        }

        public DbSet<Item> Items { get; set; }
    }
}
