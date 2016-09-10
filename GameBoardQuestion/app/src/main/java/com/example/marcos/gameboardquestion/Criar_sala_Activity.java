package com.example.marcos.gameboardquestion;

import android.content.Intent;
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
import com.example.marcos.gameboardquestion.IPserver.*;
import java.io.IOException;

public class Criar_sala_Activity extends AppCompatActivity {
    IPserver server = new IPserver();
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_criar_sala_);
        final Button btnNomeJogador = (Button)findViewById(R.id.button_cadastrar_sala);//proximo
        final TextView textViewNomeJogador = (TextView)findViewById(R.id.textView_nome_jogador);
        final EditText editTextNomeJogador = (EditText) findViewById(R.id.editText_nome_jogador);

        final Button btnNomeSala=(Button)findViewById(R.id.button_cadastrar_jogador_em_sala);//enviar
        final TextView textViewNomeSala = (TextView) findViewById(R.id.textView_nome_sala);
        final EditText editTextNomeSala = (EditText) findViewById(R.id.editText_nome_sala);

        textViewNomeJogador.setVisibility(View.INVISIBLE);
        editTextNomeJogador.setVisibility(View.INVISIBLE);
        btnNomeSala.setVisibility(View.INVISIBLE);

        btnNomeJogador.setOnClickListener( new View.OnClickListener(){
            @Override
            public void onClick(View v) {
                if (editTextNomeSala.getText().length() == 0) {//como o tamanho é zero é nulla aresposta

                    editTextNomeSala.setError("Campo vazio");

                } else if (editTextNomeSala.getText().length() < 4) {

                    editTextNomeSala.setError("Minimo 4 letras");

                } else {
                    btnNomeSala.setVisibility(View.VISIBLE);
                    textViewNomeJogador.setVisibility(View.VISIBLE);
                    editTextNomeJogador.setVisibility(View.VISIBLE);

                    textViewNomeSala.setVisibility(View.INVISIBLE);
                    editTextNomeSala.setVisibility(View.INVISIBLE);
                    btnNomeJogador.setVisibility(View.INVISIBLE);
                    RegistrarSala();
                }
            }
        });

        btnNomeSala.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                if (editTextNomeJogador.getText().length() == 0) {//como o tamanho é zero é nulla aresposta

                    editTextNomeJogador.setError("Campo vazio");

                } else if (editTextNomeJogador.getText().length() < 4) {

                    editTextNomeJogador.setError("Minimo 4 letras");

                } else {
                    RegistraJogadorSala();
                    mostrarAguardandoConexao();
                }
            }

        });


    }

    public void mostrarAguardandoConexao() {
        Intent intent = new Intent(this, AguardandoConexaoActivity.class);
        EditText edtTxtNomeSala = (EditText)findViewById(R.id.editText_nome_sala);
        EditText edtTxtNomeJogador = (EditText)findViewById(R.id.editText_nome_jogador);
        intent.putExtra("nomeJogador",edtTxtNomeJogador.getText().toString());
        intent.putExtra("nomeSala",edtTxtNomeSala.getText().toString());
        intent.putExtra("player", "1");
        intent.putExtra("Fase", "1");

        startActivity(intent);
        finish();

    }

    public void RegistrarSala(){
        new Thread(){
            public void run(){
                EditText edtTxtNomeTime = (EditText)findViewById(R.id.editText_nome_sala);
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
        HttpPost httpPost = new HttpPost(server.caminhoPHP+"criarSala.php?nome=" + entrada);

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

    public void RegistraJogadorSala(){
        new Thread(){
            public void run(){
                EditText edtTxtNomeSala = (EditText)findViewById(R.id.editText_nome_sala);
                EditText edtTxtNomeJogador = (EditText)findViewById(R.id.editText_nome_jogador);
                try {
                    postHttpJogador(edtTxtNomeSala.getText().toString(), edtTxtNomeJogador.getText().toString());
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }.start();
    }
    public void postHttpJogador(String nome, String jogador) throws IOException {
        String entrada = nome;
        String entradaJogador = jogador;

        if (nome.contains(" ")) {
            entrada = entrada.replaceAll(" ", "_");
        }
        if (jogador.contains(" ")) {
            entradaJogador = entradaJogador.replaceAll(" ", "_");
        }

        HttpClient httpClient = new DefaultHttpClient();
        HttpPost httpPost = new HttpPost(server.caminhoPHP+"entrarSala.php?nome=" + entradaJogador+"&sala="+entrada);

        final HttpResponse resposta = httpClient.execute(httpPost);
        //mensagem = EntityUtils.toString(resposta.getEntity());

        runOnUiThread(new Runnable() {
            public void run() {
                try {
                    Toast.makeText(getBaseContext(), EntityUtils.toString(resposta.getEntity()), Toast.LENGTH_LONG).show();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });
    }
}
