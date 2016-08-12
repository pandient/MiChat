api

/api/login { username, password } => userid
/api/listofrooms
/api/roominfo

/api/sendmessage{ userid, roomid , message } => success/fail
/api/subscriberoom/ { userid }
/api/unsubscriberoom/

/api/recievemessage{ timestamp , roomid } => all messages


///
frontend

react native.


NOTES for docker run
- service should have Dockerfile in package.json directory
- open up bash shell and go to the service directory, build the service image "docker build -t <username tag>/<service name> ."
	example: docker build -t tony/loginservice .
- build container with 'docker run -p <port forwarded port>:3002 -d -e "servicePort=<port forwarded port>" -e "serviceIP=<hostIP>" <IMAGE>'
	example: docker run -p 9002:3002 -d -e "servicePort=9002" -e "serviceIP=10.0.9.30" tony/loginservice

- how to forward ports for oracle vm virtualbox
(http://stackoverflow.com/questions/33814696/how-to-connect-to-a-docker-container-from-outside-the-host-same-network-windo)
    Open Oracle VM VirtualBox Manager
    Select the VM used by Docker
    Click Settings -> Network
    Adapter 1 should (default?) be "Attached to: NAT"
    Click Advanced -> Port Forwarding
    Add rule: Protocol TCP, Host Port 8080, Guest Port 8080 (leave Host IP and Guest IP empty)
You should now be able to browse to your container via localhost:8080 and your-internal-ip:8080.
 


