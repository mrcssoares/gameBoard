package com.example.marcos.gameboardquestion;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;

import java.io.IOException;

public class Criar_sala_Activity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_criar_sala_);
        Button btnNomeJogador = (Button)findViewById(R.id.button_criar_sala);
        TextView textViewNomeJogador = (TextView)findViewById(R.id.textView_nome_jogador);
        EditText editTextNomeJogador = (EditText) findViewById(R.id.editText_nome_jogador);

        textViewNomeJogador.setVisibility(View.INVISIBLE);
        editTextNomeJogador.setVisibility(View.INVISIBLE);

    }

    public void RegistrarSala(){
        new Thread(){
            public void run(){
                EditText edtTxtNomeTime = (EditText)findViewById(R.id.editText_nome_jogador);
                try {
                    postHttp(edtTxtNomeTime.getText().toString());
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }.start();
    }
    public void postHttp(String nome) throws IOException {
        String entrada = nome;
        if (nome.contains(" ")) {
            entrada = entrada.replaceAll(" ", "_");
        }
        HttpClient httpClient = new DefaultHttpClient();
        HttpPost httpPost = new HttpPost("http://192.168.1.122/gameBoard/CriarSala.php?nome=" + entrada);

        final HttpResponse resposta = httpClient.execute(httpPost);
        //mensagem = EntityUtils.toString(resposta.getEntity());

        runOnUiThread(new Runnable() {
            public void run() {
                try {
                    Toast.makeText(getBaseContext(), EntityUtils.toString(resposta.getEntity()), Toast.LENGTH_SHORT).show();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });
    }

}
