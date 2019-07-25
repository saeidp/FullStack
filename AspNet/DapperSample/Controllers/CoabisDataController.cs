using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using Oracle.ManagedDataAccess.Client;

namespace Coabis.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoabisDataController
    {
        private static string constr = "Data Source=(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=OracleDev)(PORT=1521)))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=WEL2))); User Id = xxx; Password=xxx";
       
        // GET: api/Coabis
        [HttpGet]
        public int[] Get()
        {
            using (var db = new OracleConnection(constr))
            {
                db.Open();
                var anomalies = db.Query<AnomCount>("Select Workpack_Year, Count(*) as AnomalyCount From V_WANOM WHERE Workpack_Year >= 2013 Group By Workpack_Year").ToList();

                return anomalies.OrderBy(x => x.Workpack_Year).Select(x => x.AnomalyCount).ToArray();
            }
        }
    }
}
