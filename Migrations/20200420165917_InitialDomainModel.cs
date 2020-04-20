using Microsoft.EntityFrameworkCore.Migrations;

namespace Papers.Migrations
{
    public partial class InitialDomainModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PlayerId",
                table: "Papers",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "GameSessions",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: false),
                    HasStarted = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GameSessions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Players",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ConnectionId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Score = table.Column<int>(nullable: false),
                    GameSessionId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Players", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Players_GameSessions_GameSessionId",
                        column: x => x.GameSessionId,
                        principalTable: "GameSessions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Papers_PlayerId",
                table: "Papers",
                column: "PlayerId");

            migrationBuilder.CreateIndex(
                name: "IX_Players_GameSessionId",
                table: "Players",
                column: "GameSessionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Papers_Players_PlayerId",
                table: "Papers",
                column: "PlayerId",
                principalTable: "Players",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Papers_Players_PlayerId",
                table: "Papers");

            migrationBuilder.DropTable(
                name: "Players");

            migrationBuilder.DropTable(
                name: "GameSessions");

            migrationBuilder.DropIndex(
                name: "IX_Papers_PlayerId",
                table: "Papers");

            migrationBuilder.DropColumn(
                name: "PlayerId",
                table: "Papers");
        }
    }
}
