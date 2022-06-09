using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore.SqlServer;
using MovieApp.Models;
using System.Data;
using System;

namespace MovieApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public CategoryController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                              select * from dbo.category";
            DataTable table = new DataTable();

            string sqlDataSource = _configuration.GetConnectionString("MovieAppCon");
            SqlDataReader myReader;
            using (SqlConnection myconnection = new SqlConnection(sqlDataSource))
            {
                myconnection.Open();
                using (SqlCommand command = new SqlCommand(query, myconnection))
                {
                    myReader = command.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myconnection.Close();
                }
            }
            return new JsonResult(table);
        }

        [HttpPost]
        public IActionResult Post(category _cateogory)
        {
            string query = @"
                              insert into dbo.category values ('" + _cateogory.CategoryName + @"')";
            DataTable table = new DataTable();

            string sqlDataSource = _configuration.GetConnectionString("MovieAppCon");
            SqlDataReader myReader;
            using (SqlConnection myconnection = new SqlConnection(sqlDataSource))
            {
                myconnection.Open();
                using (SqlCommand command = new SqlCommand(query, myconnection))
                {
                    myReader = command.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myconnection.Close();
                }
            }
            return Ok("added");

        }

        [HttpPut]
        public IActionResult Put(category _cateogory)
        {
            string query = @"
                              update dbo.category set CategoryName='" + _cateogory.CategoryName + @"'where CategoryId =" +
                              _cateogory.CategoryId + @"";
            DataTable table = new DataTable();

            string sqlDataSource = _configuration.GetConnectionString("MovieAppCon");
            SqlDataReader myReader;
            using (SqlConnection myconnection = new SqlConnection(sqlDataSource))
            {
                myconnection.Open();
                using (SqlCommand command = new SqlCommand(query, myconnection))
                {
                    myReader = command.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myconnection.Close();
                }
            }
            return Ok("updated!");

        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            string query = @"
                              delete from dbo.category where CategoryId="
                              + id + @"";
            DataTable table = new DataTable();

            string sqlDataSource = _configuration.GetConnectionString("MovieAppCon");
            SqlDataReader myReader;
            using (SqlConnection myconnection = new SqlConnection(sqlDataSource))
            {
                myconnection.Open();
                using (SqlCommand command = new SqlCommand(query, myconnection))
                {
                    myReader = command.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myconnection.Close();
                }
            }
            return Ok("Deleted!");

        }

    }
}
