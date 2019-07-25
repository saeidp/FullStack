using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Protocols;
using Oracle.ManagedDataAccess.Client;

namespace Coabis.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class CoabisController : ControllerBase
    {

        private static string constr = "Data Source=(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=OracleDev)(PORT=1521)))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=WEL2))); User Id = xxx; Password=xxx";

        // GET: api/Anoms
        [HttpGet]
        [Route("api/Anomalies")]
        public List<Anom> GetAnoms()
        {
            using (var db = new OracleConnection(constr))
            {
                db.Open();
                return db.Query<Anom>("Select * From Anom").ToList();
            }
 
        }
      
    }
}
