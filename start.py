from aiogram import Bot, Dispatcher, executor, types
from aiogram.contrib.fsm_storage.memory import MemoryStorage
from aiogram.types import InputFile, ContentType, WebAppInfo
from aiogram.dispatcher import FSMContext


import logging
import config
import json


logging.basicConfig(level=logging.INFO)
storage = MemoryStorage()

bot = Bot(token=config.TOKEN)
dp = Dispatcher(bot, storage=MemoryStorage())


@dp.message_handler(commands='start')
async def start(message: types.Message):
    keyboard = types.ReplyKeyboardMarkup()
    keyboard.add(types.KeyboardButton(text='Открыть веб-страницу', web_app=WebAppInfo(url='https://ivanzoizi.github.io/webapptelegram/')))
    await message.answer("👋Приветствую Вас!",  reply_markup=keyboard)


@dp.message_handler(content_types=['web_app_data'])
async def web_app(message: types.Message):
    res = json.loads(message.web_app_data.data)
    await message.answer(f"✅Вы успешно зарегистрировались!\nВаше имя - {res['name']}.\nВаша почта - {res['email']}.\n"
                         f"Ваш пароль успешно сохранился.")

if __name__ == '__main__':
    executor.start_polling(dp, skip_updates=True)
