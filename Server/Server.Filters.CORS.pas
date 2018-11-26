unit Server.Filters.CORS;

interface

uses
  System.SysUtils, System.Classes,

  WiRL.Core.Registry,
  WiRL.http.Filters,
  WiRL.http.Request,
  WiRL.http.Response,
  WiRL.Core.Attributes,
  WiRL.Core.Exceptions,
  WiRL.Core.Auth.Context,
  WiRL.http.URL,
  WiRL.Core.Application,
  WiRL.http.Accept.MediaType;

type
  [PreMatching]
  TCORSFilter = class(TInterfacedObject, IWiRLContainerRequestFilter)
  public
    procedure Filter(ARequestContext: TWiRLContainerRequestContext);
  end;

implementation

{ TCORSFilter }

procedure TCORSFilter.Filter(ARequestContext: TWiRLContainerRequestContext);
begin
  ARequestContext.Response.HeaderFields['Access-Control-Allow-Origin'] := '*';
  ARequestContext.Response.HeaderFields['Access-Control-Allow-Methods'] := 'GET, POST, PUT, DELETE, EXECUTE';
  ARequestContext.Response.HeaderFields['Access-Control-Allow-Headers'] := 'Origin, X-Requested-With, Content-Type, Accept, Authorization';
  ARequestContext.Response.HeaderFields['Access-Control-Expose-Headers'] := 'WWW-Authenticate, Content-Length, X-Exception-Name';

  if ARequestContext.Request.Method = 'OPTIONS' then
  begin
    ARequestContext.Response.ContentType := TMediaType.TEXT_PLAIN;
    ARequestContext.Response.StatusCode := 200;
    ARequestContext.Abort;
  end;
end;

initialization
  TWiRLFilterRegistry.Instance.RegisterFilter<TCORSFilter>;


end.
