import concurrent.futures as futures
from datetime import datetime
import os
import requests

def elapsed(func):
    def wrapper(*args, **kwargs):
        start = datetime.now()
        func(*args, **kwargs)
        end = datetime.now()

        elapsed = end - start
        print(f'elapsed: {elapsed}')

    return wrapper

def fetch(sub):
    url = 'http://localhost:3000/' + sub
    requests.get(url)

@elapsed
def main():
    with futures.ThreadPoolExecutor(max_workers=os.cpu_count()) as executor:
        races = [executor.submit(fetch, f'practice_prisma_{x}') for x in [x for x in range(1, 201)] * 50]
        (done, notdone) = futures.wait(races)

if __name__ == '__main__':
    main()
