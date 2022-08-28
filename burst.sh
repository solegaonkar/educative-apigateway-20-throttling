apiId=`aws cloudformation list-stack-resources --stack-name EducativeCourseApiGateway | jq -r ".StackResourceSummaries[4].PhysicalResourceId"`
url="https://${apiId}.execute-api.us-east-1.amazonaws.com/v1/hello"    
for i in {1..100}; do curl --location --request POST $url --header 'Content-Type: application/json' --data-raw '{ "message": "Hello World" }' & done
