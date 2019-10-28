using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Text;
using TestProjectAngular.API;
using TestProjectAngular.API.Common.Settings;
using TestProjectAngular.API.DAL;

namespace WeAPICore
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IHostingEnvironment hostingEnvironment)
        {
            Configuration = configuration;
            HostingEnvironment = hostingEnvironment;
        }

        public IConfiguration Configuration { get; }

        public IHostingEnvironment HostingEnvironment { get; }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

            })
                               .AddJwtBearer(options =>
                               {
                                   options.RequireHttpsMetadata = false;
                                   options.SaveToken = true;
                                   options.TokenValidationParameters = new TokenValidationParameters
                                   {
                                       ValidateIssuerSigningKey = true,
                                       IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(AuthSettings.KEY)),
                                       ValidateIssuer = false,
                                       ValidateAudience = false,
                                       ClockSkew = TimeSpan.Zero,
                                   };
                               });
            services.AddDbContextPool<TestProjectAngularAPICoreContext>(options => options.UseSqlServer(Configuration.GetConnectionString("LocalDataBase")));
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            TestProjectAngular.API.BLL.Configuration.Setup(services, HostingEnvironment);
            TestProjectAngular.API.DAL.Configuration.Setup(services);


        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseCors(options => options.WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowCredentials()
            .SetIsOriginAllowedToAllowWildcardSubdomains());

            app.UseAuthentication();
            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
