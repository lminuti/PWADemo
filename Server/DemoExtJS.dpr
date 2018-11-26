{******************************************************************************}
{                                                                              }
{       WiRL: RESTful Library for Delphi                                       }
{                                                                              }
{       Copyright (c) 2015-2017 WiRL Team                                      }
{                                                                              }
{       https://github.com/delphi-blocks/WiRL                                  }
{                                                                              }
{******************************************************************************}
program DemoExtJS;

uses
  Forms,
  Server.Forms.Main in 'Server.Forms.Main.pas' {MainForm},
  Server.Resources.Data in 'Server.Resources.Data.pas' {MainModule: TDataModule},
  Server.Database.Builder in 'Server.Database.Builder.pas' {DatabaseBuilder: TDataModule},
  Server.Filters.CORS in 'Server.Filters.CORS.pas';

{$R *.res}

begin
  Application.Initialize;
  Application.MainFormOnTaskbar := True;
  Application.CreateForm(TMainForm, MainForm);
  Application.Run;
end.
