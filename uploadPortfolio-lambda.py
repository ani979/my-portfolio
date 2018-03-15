import boto3
import io
import zipfile
import mimetypes
def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:208552662560:deployPortfolioTopic')
    try:
        s3 = boto3.resource('s3')
        portfolio_bucket = s3.Bucket('portfolio.animesh.life')
        build_bucket = s3.Bucket('portfoliobuild.animesh.life1')
        portfolio_zip = io.BytesIO()
        build_bucket.download_fileobj('portfoliobuild.zip',portfolio_zip)
        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                print(obj)
                portfolio_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
        topic.publish(Subject="Portfolio Deployment", Message = "Portfolio Deployed Successfully!")
    except:
        topic.publish(Subject="Portfolio Deployment Failure", Message = "Portfolio Deploy Failed!")
        raise
    return "job done!"
    
