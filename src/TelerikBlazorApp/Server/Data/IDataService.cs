using System.Collections.Generic;
using TelerikBlazorApp.Shared.Models.Employee;
using TelerikBlazorApp.Shared.Models.Sales;

namespace TelerikBlazorApp.Server.Data
{
    public interface IDataService
    {
        List<Employee> GetEmployees();
        IEnumerable<Sale> GetSales();
        List<Team> GetTeams();
    }
}
