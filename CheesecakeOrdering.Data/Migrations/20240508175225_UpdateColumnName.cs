using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CheesecakeOrdering.Data.Migrations
{
    /// <inheritdoc />
    public partial class UpdateColumnName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SpecialRequests",
                table: "CheescakeOrders",
                newName: "Requests");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Requests",
                table: "CheescakeOrders",
                newName: "SpecialRequests");
        }
    }
}
