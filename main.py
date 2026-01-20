# 이 파일은 재배포 실패 테스트용입니다
# 절대 실제 프로덕션에 사용하지 마세요!

import sys
import os
from nonexistent_module import impossible_function  # ❌ 존재하지 않는 모듈

def break_everything():
    """이 함수는 모든 것을 망가뜨립니다"""
    x = 1 / 0  # ❌ ZeroDivisionError
    return "이 코드는 실행되지 않습니다"

class BrokenClass:
    def __init__(self):
        self.undefined_variable = some_random_variable  # ❌ NameError
        
    def recursive_hell(self, count=0):
        """무한 재귀로 스택 오버플로우 유발"""
        return self.recursive_hell(count + 1)  # ❌ RecursionError

# 즉시 실행되는 에러 코드
print("재배포 실패 테스트 시작...")
undefined_function()  # ❌ NameError
break_everything()

# 잘못된 문법도 추가
if True
    print("문법 오류!")  # ❌ SyntaxError (콜론 없음)

# 존재하지 않는 파일 열기
with open("nonexistent_file.txt", "r") as f:  # ❌ FileNotFoundError
    content = f.read()

print("이 줄은 절대 실행되지 않습니다")
