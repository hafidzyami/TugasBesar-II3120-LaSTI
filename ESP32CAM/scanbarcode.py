import cv2
import numpy as np
import pyzbar.pyzbar as pyzbar
import urllib.request
from datetime import datetime
from supabase import create_client, Client

url: str = 'https://qjhregjhqkdytxlqzjpd.supabase.co'
key: str = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqaHJlZ2pocWtkeXR4bHF6anBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA3MTY2NDEsImV4cCI6MjAxNjI5MjY0MX0._ynVU0eK_DtmXo4N6qPw5zyFLA8AqnLWL3kN6tyRQKU'
supabase: Client = create_client(url, key)

def get_current_timestamp():
    # Get current timestamp
    current_timestamp = datetime.now()

    # Format timestamp as dd-mm-yy hh:mm:ss
    formatted_timestamp = current_timestamp.strftime("%d-%m-%Y %H:%M:%S")

    return formatted_timestamp
 
#cap = cv2.VideoCapture(0)
font = cv2.FONT_HERSHEY_PLAIN
 
url='http://192.168.0.167/'
cv2.namedWindow("live transmission", cv2.WINDOW_AUTOSIZE)
 
prev=""
pres=""
while True:
    img_resp=urllib.request.urlopen(url+'cam-hi.jpg')
    imgnp=np.array(bytearray(img_resp.read()),dtype=np.uint8)
    frame=cv2.imdecode(imgnp,-1)
    #_, frame = cap.read()
 
    decodedObjects = pyzbar.decode(frame)
    for obj in decodedObjects:
        pres=obj.data
        if prev == pres:
            pass
        else:
            print("Type:",obj.type)
            print("Data: ",obj.data)
            decoded_data = obj.data.decode('utf-8')
            print("Decode Data:", decoded_data)
            prev=pres
            if(decoded_data[:2] == "tI"):
                data, count = supabase.table('Member').update({'timeIn': get_current_timestamp()}).eq('username', decoded_data[2:]).execute()
            elif(decoded_data[:2] == "tO"):
                data, count = supabase.table('Member').update({'timeOut': get_current_timestamp()}).eq('username', decoded_data[2:]).execute()
            
        cv2.putText(frame, str(obj.data), (50, 50), font, 2,
                    (255, 0, 0), 3)
 
    cv2.imshow("live transmission", frame)
 
    key = cv2.waitKey(1)
    if key == 27:
        break
 
cv2.destroyAllWindows()