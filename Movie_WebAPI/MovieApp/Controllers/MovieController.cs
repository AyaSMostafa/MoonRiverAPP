using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MovieApp.Models;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore.SqlServer;
using System.Data;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;
using System.Net.Http.Headers;

namespace MovieApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public MovieController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                              select MovieId,MovieName,Category,
                             convert(varchar(10),MovieYear,120) as MovieYear,
                              mov_lang,PhotoFileName from dbo.movie";
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
        public IActionResult Post(movie _movie)
        {
            string query = @"
                              insert into dbo.movie 
                              (MovieName,Category,MovieYear,mov_lang,PhotoFileName)
                              values
                              (
                              '" + _movie.MovieName + @"'
                              ,'" + _movie.Category + @"'
                              ,'" + _movie.MovieYear + @"'
                              ,'" + _movie.mov_lang + @"'
                              ,'" + _movie.PhotoFileName + @"'

                              )";
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
        public IActionResult Put(movie _movie)
        {
            string query = @"
            UPDATE dbo.movie set
            MovieName = '" + _movie.MovieName + @"'
            ,Category = '" + _movie.Category + @"'
            ,MovieYear = '" + _movie.MovieYear + @"'
            ,mov_lang = '" + _movie.mov_lang + @"'
            ,PhotoFileName= '" + _movie.PhotoFileName + @"'
            where MovieId = " + _movie.MovieId + @"";

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
        //public IActionResult Delete(int id)
        public JsonResult Delete(int id)
        {
            string query = @"
                              delete from dbo.movie where MovieId = "
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
            //return Ok("Deleted!");
            return new JsonResult("Deleted Successfully");

        }



        [Route("GetAllCategoriesNames")]
        [HttpGet]
        public JsonResult GetAllCategoriesNames()
        {

            string query = @"
                              select Category
                             from dbo.movie";
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

        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/Photos/" + filename;

                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }

                return new JsonResult(filename);
            }
            catch (Exception)
            {
                return new JsonResult("anonymous.png");


            }
        }

    }
}
